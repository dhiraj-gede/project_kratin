import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";

import { RiHeartPulseFill } from "react-icons/ri";
import { FaCrutch } from "react-icons/fa";
import { GiDrop } from "react-icons/gi";

import "./dashboardContent.css";

const DashboardContent = ({ user }) => {
  useEffect(() => {
    console.log("Dashboard", user);
  }, []);
  return (
    <main>
      <div className="name">{user.name}</div>
      <h1>Dashboard</h1>
      <div className="insights">
        {/* -------------------------Heart-------------------------- */}
        <div className="heart">
          <span>
            <RiHeartPulseFill className="icon"/>
          </span>
          <div className="middle">
            <div className="left">
              <h3>Heart-Rate</h3>
              <h1>66bpm</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="number">
                <p>66BPM</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 hours</small>
        </div>
        {/* -------------------------End of Heart-------------------------- */}
        {/* -------------------------Sugar-------------------------- */}
        <div className="sugar">
          <span>
            <FaCrutch className="icon"/>
          </span>
          <div className="middle">
            <div className="left">
              <h3>Diabetes Level</h3>
              <h1>66bpm</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="number">
                <p>66BPM</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 hours</small>
        </div>
        {/* -------------------------End of Sugar-------------------------- */}
        {/* -------------------------cholestrol-------------------------- */}
        <div className="cholestrol">
          <span>
            <GiDrop className="icon"/>
          </span>
          <div className="middle">
            <div className="left">
              <h3>cholestrol Level</h3>
              <h1>66bpm</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="number">
                <p>66BPM</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 hours</small>
        </div>
        {/* -------------------------End of Sugar-------------------------- */}
      </div>
    </main>
  );
};

export default DashboardContent;
