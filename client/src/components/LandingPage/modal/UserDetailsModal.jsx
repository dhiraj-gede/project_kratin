import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";

import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { TextField } from "@mui/material";

const steps = [
  {
    label: "General Information",
    fields: ["aadhaar", "age", "weight", "height", "sex", "bloodType"],
  },
  {
    label: "Chronic Illness",
    
    fields: ["code", "IllnessName", "medicine", "treatment", "date"],
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UserDetailsModal = (props) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [openModal, setOpenModal] = useState(false);

  const [userData, setUserData] = useState({
    // information: {
      weight: "",
      height: "",
      aadhaar: "",
      sex: "",
      bloodType: "",
      age: "",
    // },
    // chronicIllnesses: [
    //   {
        code: "",
        IllnessName: "",
        medicine: "",
        date: "",
        treatment: "",
    //   },
    // ],
    // testResults: [],
    // healthStats: {
    //   heartRate: 0,
    //   glucose: 0,
    //   temprature: 0,
    //   oxygen: 0,
    // },
  });

  const handleInput = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if(name!=='bloodType' && name!=='sex' && steps[0].fields.includes(name)  ){
      value = Number(e.target.value);
    }
    e.preventDefault()
    setUserData({
      ...userData,
      [name]: value,
    });
    // console.log(userData[name]);
  };

  // const handleHeight = (e) => {
  //   setUserData((userData) => ({
  //     ...userData,
  //     height: Number(e.target.value),
  //   }));
  //   console.log(userData);
  // };
  // const handleWeight = (e) => {
  //   setUserData((userData) => ({
  //     ...userData,
  //     weight: Number(e.target.value),
  //   }));
  //   console.log(userData);
  // };

  const putData = async () => {
    const url = process.env.REACT_APP_BACKEND_ENDPOINT_API;
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const bodyParams = userData;
    console.log('body',bodyParams);
    const { data } = await axios.put(
      url + "/patient/" + localStorage.getItem("userId"),
      bodyParams,
      config
    );
    // console.log("data ", data);
  };

  const handleCloseModal = () => setOpenModal(false);
  const handleSubmit = (e) => {
    putData();
    // console.log(userData);
    props.setOpenModal(false);
    handleCloseModal();
  };
  useEffect(() => {
    setOpenModal(true);
  }, []);
  // useEffect(() => {console.log('userData')},[userData])

  return (
    <>
      <Modal
        keepMounted
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 2,

              bgcolor: "background.default",
            }}
          >
            <Typography>{steps[activeStep].label}</Typography>
          </Paper>
          <Box
            sx={{
              height: 255,
              maxWidth: 400,
              width: "100%",
              p: 2,
              display: "grid",
              gap: 1,
              gridTemplateColumns: " repeat(2, 1fr)",
            }}
          >
            {steps[activeStep].fields.map((item, index) => {
              return (
                <TextField
                  key={index}
                  id="outlined-basic"
                  label={item}
                  variant="outlined"
                  value = {userData[item]}
                  name={item}
                  onChange={(e) => handleInput(e)}
                />
              );
            })}
          </Box>
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />

          <Button
            sx={{
              position: "relative",
              left: "95%",
              transform: "translate(-100%, 0)",
            }}
            onClick={handleSubmit}
          >
            submit
          </Button>
        </Box>

        {/* <Box sx={style}>
          <input
            type="number"
            placeholder="weight in Kg"
            onChange={(e) => handleWeight(e)}
          />
          <input
            type="number"
            placeholder="height in Cm"
            onChange={(e) => handleHeight(e)}
          />
          <Button onClick={handleSubmit}>submit</Button>
        </Box> */}
      </Modal>
    </>
  );
};

export default UserDetailsModal;
