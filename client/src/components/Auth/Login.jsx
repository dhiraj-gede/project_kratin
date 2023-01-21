import React, { useState } from "react";
import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import axios from "axios";
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";
import { useNavigate, Link, redirect } from "react-router-dom";

import "./login.css";

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    load: false,
  });

  const handleEmail = (e) => {
    setForm((form) => ({
      ...form,
      email: e.target.value,
    }));
  };

  const handlePassword = (e) => {
    setForm((form) => ({
      ...form,
      password: e.target.value,
    }));
  };

  const validateInput = (data) => {
    if (data["email"] === "") {
      enqueueSnackbar("email is a required field", { variant: "warning" });
      return false;
    } else if (data["password"] === "") {
      enqueueSnackbar("Password is required", { variant: "warning" });
      return false;
    }
    return true;
  };

  const persistLogin = (token, name, email, _id) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("name", name);
    localStorage.setItem("userId", _id);
  };

  const login = async (formData, event) => {
    event.preventDefault();
    try {
      if (validateInput(formData)) {
        setForm((form) => ({ ...form, load: true }));
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_ENDPOINT_API}auth/login`,
          { email: formData.email, password: formData.password }
        );
        console.log(response);
        const { tokens, user } = response.data;
        setForm((form) => ({ ...form, load: false }));
        enqueueSnackbar("Logged in successfully", { variant: "success" });
        persistLogin(tokens.access.token,user.name, user.email, user._id);
        navigate("/");
      }
    } catch (error) {
      setForm((form) => ({ ...form, load: false }));
      // console.log("error->", err);
      if (error.response.status >= 400) {
        // console.log("error msg from login->",error.response);
        const messageFromBackend = error.response.data.message;
        enqueueSnackbar(messageFromBackend, { variant: "error" });
      } else {
        enqueueSnackbar(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON",
          { variant: "warning" }
        );
      }
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      {/* <Header hasHiddenAuthButtons /> */}
      <Box className="content">
        <Stack spacing={2} className="form">
          <h2 className="title">Login</h2>
          <TextField
            id="email"
            name="email"
            label="email"
            // value={form.email}
            placeholder="Enter registered email"
            variant="outlined"
            onChange={handleEmail}
            fullWidth
          />

          <TextField
            id="password"
            name="password"
            type="password"
            label="password"
            // value={form.password}
            placeholder="Enter Password"
            variant="outlined"
            onChange={handlePassword}
            fullWidth
          />
          {form.load === true ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            <Button
              className="button"
              variant="contained"
              onClick={(e) => login(form, e)}
            >
              LOGIN TO Healify
            </Button>
          )}

          <p className="secondary-action">
            Don’t have an account?{" "}
            <Link to="/register" className="link">
              Register now
            </Link>
          </p>
        </Stack>
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default Login;
