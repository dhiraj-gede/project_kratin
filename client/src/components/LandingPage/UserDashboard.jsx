import React, { useState, useEffect } from "react";

import axios from "axios";
import DashboardContent from "./dashboardComponents/dashboardContent/DashboardContent";
import Sidebar from "../sidebar/Sidebar";
import { Route, Routes, useParams } from "react-router-dom";
import Profile from "./dashboardComponents/profile/Profile";
import Prescriptions from "./dashboardComponents/prescriptions/Prescriptions";
import Exercises from "./dashboardComponents/exercises/Exercises";
import Reports from "./dashboardComponents/reports/Reports";
import UserDetailsModal from "./modal/UserDetailsModal";

const UserDashboard = () => {
  const [user, setUser] = useState({});

  const [openModal, setOpenModal] = useState(false);

  const performAPICall = async () => {
    const url = process.env.REACT_APP_BACKEND_ENDPOINT_API;
    console.log("APICall", url);

    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const { data } = await axios.get(
      url + "/patient/" + localStorage.getItem("userId"),
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  return (
    <div className="container">
      <Sidebar />
      
        {openModal ? (
            <UserDetailsModal setOpenModal={setOpenModal} />
        ) : (
          <>
            <Routes>
              <Route path="/:id" element={<Child user={user} />} />
            </Routes>
          </>
        )}
    
    </div>
  );
};

const Child = ({ user }) => {
  let { id } = useParams();
  const renderComponent = () => {
    if (id === "dashboard") {
      return <DashboardContent user={user} />;
    } else if (id === "profile") return <Profile user={user} />;
    else if (id === "prescriptions") return <Prescriptions user={user} />;
    else if (id === "exercises") return <Exercises user={user} />;
    else if (id === "reports") return <Reports user={user} />;
  };
  return <>{renderComponent()}</>;
};

export default UserDashboard;
