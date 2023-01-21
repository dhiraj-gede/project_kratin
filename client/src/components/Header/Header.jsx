import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./header.css";
import {useNavigate, Link } from 'react-router-dom';

import logo from '../../assets/Download.svg'

const Header = ({ children, hasHiddenAuthButtons }) => {
  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/')
  };

  const logout=()=>{
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate('/');
    window.location.reload();
  }
  if(hasHiddenAuthButtons){
    return (
      <Box className="header">
        <Box className="header-title">
          <Link to='/'>
            dasfadf
          </Link>
        </Box>
        
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick = {navigateHome}
        >
          Back to explore
        </Button>
      </Box>
    );
  }
  else{
    return (
      <Box className="header" style={{background: 'rgb(82, 130, 101)',paddingLeft:'0'}}>
        <Box className="header-title" style={{ padding: '1rem', maxWidth:'30%'}} >
          <Link to='/'>
          <img src={logo} alt="Logo" style={{width: '60%'}} />
          </Link>
        </Box>
        {children}
        <Stack direction = 'row' spacing={1} alignItems = 'center'>

          {localStorage.getItem("name")? (
            <>
            
            <Avatar src ='avatar.png'style = {{color:'rgb(0,0,0)', background: '#C9EFC7'}} alt = {localStorage.getItem('name')|| 'profile'}/>
            <p className="username-text">{localStorage.getItem('username')}</p>
            <Button type = 'primary' className="btnss btnss-register" onClick = {logout}>
              logout
            </Button>
            </>
          ): (
            <>
            <Button className="btnss btnss-register" onClick = {()=>
              {navigate('/login')}
            }>
              Login
            </Button>
            <Button className="btnss btnss-register"  onClick ={()=>
              {navigate('/register')}
            }>
              Register
            </Button>
            </>
          ) }
        </Stack>
        
      </Box>
    );
  }
    
};

export default Header;
