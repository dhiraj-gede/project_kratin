import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import "./register.css";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    name: "",
    email:"",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setLoading] = useState(false);
 const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  }



  
  const register = async (formData) => {
    setLoading(true);
    const registerUrl = `${process.env.REACT_APP_BACKEND_ENDPOINT_API}/auth/register`;

    try {
      
      if (validateInput(formData)) {

        await axios.post(
          registerUrl,
          {
            name: formData.name,
            email:formData.email,
            password: formData.password
          }
        );

        // console.log(registerResponse.data);
        enqueueSnackbar("Registered Successfully", {variant: "success"});
        navigate("/login")

      }

    } catch (e) {
      // console.log(e.response.data.message);
      enqueueSnackbar(`${e.response.data.message}`, {variant: "error"});

    } finally {
      setLoading(false);
    }

  };

  const validateInput = (data) => {
    const {name, password, confirmPassword} = data;

    if (!name) {
      enqueueSnackbar("name is a required field", {variant: "warning"});
      return false;
    }

    if (name.length < 6) {
      enqueueSnackbar("name must be at least 6 characters", {variant: "warning"});
      return false;
    }

    if (!password) {enqueueSnackbar("Password is a required field", {variant: "warning"});
      return false;
    }

    if (password.length < 6) {
      enqueueSnackbar("Password must be at least 6 characters", {variant: "warning"});
      return false;
    }

    if (password !== confirmPassword) {
      enqueueSnackbar("Passwords do not match", {variant: "warning"});
      return false;
    }

    return true;
  };

  const RegisterButton = () => (
    <Button 
    className="button" 
    variant="contained"
    fullWidth
    onClick={() => {register(formData)}}
    >
    Register Now
    </Button>
  );

  const ShowLoading = () => (
    <CircularProgress color="success" style={{alignSelf: "center"}} />
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Box className="content">
        <Stack spacing={2} className="form">
          <h2 className="title">Register</h2>
          <TextField
            id="name"
            label="name"
            variant="outlined"
            title="name"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={(e) => handleInput(e)}
            fullWidth
          />
          <TextField
            id="email"
            label="email"
            variant="outlined"
            title="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) => handleInput(e)}
            fullWidth
          />
          <TextField
            id="password"
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            helperText="Password must be atleast 6 characters length"
            fullWidth
            placeholder="Enter a password with minimum 6 characters"
            value={formData.password}
            onChange={(e) => handleInput(e)}
          />
          <TextField
            id="confirmPassword"
            variant="outlined"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            fullWidth
            value={formData.confirmPassword}
            onChange={(e) => handleInput(e)}
          />

          {isLoading ? <ShowLoading /> : <RegisterButton />}
          
          <p className="secondary-action">
            Already have an account?{" "}
             <Link className="link" to="./login">
              Login here
             </Link>
          </p>
        </Stack>
      </Box>
    </Box>
  );
};

export default Register;
