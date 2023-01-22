import React from "react";
import { RiHeartPulseFill } from "react-icons/ri";
import { FaCrutch } from "react-icons/fa";
import { GiDrop } from "react-icons/gi";

import "./dashboardContent.css";

const DashboardContent = ({ user }) => {
 
  return (
    <main>
      <div className="name">{localStorage.name.toUpperCase()}</div>
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
        {/* -------------------------Blood Pressure-------------------------- */}
        <div className="heart">
          <span>
            <GiDrop className="icon"/>
          </span>
          <div className="middle">
            <div className="left">
              <h3>Blood Pressure</h3>
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
        {/* -------------------------Eye -------------------------- */}
        <div className="sugar">
          <span>
            <GiDrop className="icon"/>
          </span>
          <div className="middle">
            <div className="left">
              <h3>Eye Details</h3>
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
        {/* -------------------------End of eye-------------------------- */}
        {/* -------------------------Thyroid -------------------------- */}
        <div className="cholestrol">
          <span>
            <GiDrop className="icon"/>
          </span>
          <div className="middle">
            <div className="left">
              <h3>Thyroid</h3>
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
        {/* -------------------------End of Thyroid-------------------------- */}
        
        {/* -------------------------Temperature -------------------------- */}
        <div className="heart">
          <span>
            <GiDrop className="icon"/>
          </span>
          <div className="middle">
            <div className="left">
              <h3>Temperature</h3>
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
        {/* -------------------------End of Temperature-------------------------- */}
        {/* -------------------------Sodium -------------------------- */}
        <div className="sugar">
          <span>
            <GiDrop className="icon"/>
          </span>
          <div className="middle">
            <div className="left">
              <h3>Sodium</h3>
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
        {/* -------------------------End of Sodium-------------------------- */}
        {/* -------------------------Hemoglobin -------------------------- */}
        <div className="cholestrol">
          <span>
            <GiDrop className="icon"/>
          </span>
          <div className="middle">
            <div className="left">
              <h3>Hemoglobin</h3>
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
        {/* -------------------------End of Hemoglobin-------------------------- */}
      </div>
    </main>
  );
};

export default DashboardContent;
