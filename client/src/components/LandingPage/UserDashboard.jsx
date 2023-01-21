import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import axios from "axios";
import DashboardContent from "./dashboardComponents/DashboardContent";
import Sidebar from "../sidebar/Sidebar";
import { Route, Routes, useParams } from "react-router-dom";
import Profile from "./dashboardComponents/Profile";
import Prescriptions from "./dashboardComponents/Prescriptions";
import Exercises from "./dashboardComponents/Exercises";
import Reports from "./dashboardComponents/Reports";

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
  const [openModal, setOpenModal] = useState(false);

  const [userData, setUserData] = useState({
    weight: 0,
    height: 0,
  });

  const handleHeight = (e) => {
    setUserData((userData) => ({
      ...userData,
      height: Number(e.target.value),
    }));
    console.log(userData);
  };
  const handleWeight = (e) => {
    setUserData((userData) => ({
      ...userData,
      weight: Number(e.target.value),
    }));
    console.log(userData);
  };

  const putData = async () => {
    const url = process.env.REACT_APP_BACKEND_ENDPOINT_API;
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const bodyParams = userData;
    console.log(bodyParams);
    const { data } = await axios.put(
      url + "patient/" + localStorage.getItem("userId"),
      bodyParams,
      config
    );
    console.log("data ", data);
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleSubmit = (e) => {
    putData();
    console.log(userData);
    props.setOpenModal(false);
    handleCloseModal();
  };
  useEffect(() => {
    setOpenModal(true);
  }, []);

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
        </Box>
      </Modal>
    </>
  );
};

// const DashboardContent = ({ user }) => {
//   useEffect(() => {
//     console.log("Dashboard", user);
//   }, []);
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container>
//         <Grid lg={9} sm={7} xs={12}>
//           <strong>name</strong>
//           <h3>{user.name}</h3>
//           <Grid container>
//             <Grid xs={6}></Grid>
//             <Grid xs={6}>t</Grid>
//           </Grid>
//         </Grid>
//         <Grid lg={3} sm={5} xs={12} p={0}>
//           {user.userData ? (
//             <img
//               src={`${user.userData.image}`}
//               alt="userImage"
//               style={{
//                 position: "relative",
//                 width: "30vh",
//                 height: "30vh",
//                 objectFit: "cover",
//                 transform: "translate(-50%, -50%)",
//               }}
//             />
//           ) : (
//             ""
//           )}
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

/**
 * 
 * @returns  
              
 */
const UserDashboard = () => {
  const { params } = useParams();
  const [user, setUser] = useState({});

  const [openModal, setOpenModal] = useState(false);

  const performAPICall = async () => {
    const url = process.env.REACT_APP_BACKEND_ENDPOINT_API;
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const { data } = await axios.get(
      url + "patient/" + localStorage.getItem("userId"),
      config
    );
    return await data;
  };

  const handleUserData = async () => {
    const data = await performAPICall();
    setUser(data);
    setOpenModal(data.userData === undefined);
  };

  useEffect(() => {
    handleUserData(); 
    console.log(params)

  }, []);
  useEffect(() => {
    handleUserData();
  }, [user]);

  return (
    <div className="container">
      <Sidebar />

      {openModal ? (
        <>
          <UserDetailsModal setOpenModal={setOpenModal} />
        </>
      ) : (
        <>
        <Routes>
          <Route path="/:id" element={<Child user={user} />}/>
        </Routes>
          
        </>
      )}
    </div>
  );
};


const Child=({user})=>{
  let {id} = useParams();
  const renderComponent = () =>{
    if(id==="dashboard"){
      return <DashboardContent user={user} />
    }
    else if(id==="profile")  return <Profile user = {user}/>
    else if(id==="prescriptions")  return <Prescriptions user = {user}/>
    else if(id==="exercises")  return <Exercises user = {user}/>
    else if(id==="reports")  return <Reports user = {user}/>
  }
  return(
    <>
    {
      renderComponent()

      }
      </>
  )
}

export default UserDashboard;
