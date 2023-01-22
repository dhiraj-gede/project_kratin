import React from "react";
import Header from "../Header/Header";
import DefaultDashboard from "./DefaultDashboard";
import UserDashboard from "./UserDashboard";

const LandingPage = () => {
  return (
    <div>
      {localStorage.getItem("name") ? (

        <UserDashboard />
        
      ) : (
        <>
          <Header />
          <DefaultDashboard />
        </>
      )}
    </div>
  );
};

export default LandingPage;
