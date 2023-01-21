import React from "react";
import logo from "../../assets/Download.svg";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";
import { RiProfileLine } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { TbReportMedical } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import './sidebar.css'



const Sidebar = () => {
    const navigate = useNavigate()
    const logout=()=>{
        localStorage.removeItem("name");
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate('/');
        window.location.reload();
      }
  return (
    
      <aside>
        <div className="top">
          <div className="logo" style={{ display:'flex', justifyContent:'center'}}>
            <img src={logo} alt="logo" />
            
          </div>
          <div className="close" id="close">
            <span className="icon">
              <AiOutlineClose />
            </span>
          </div>
        </div>
        <div className="sidebar">
          <Link to='dashboard'>
            <span>
              <BsFillGridFill />
            </span>
            <h3>Dashboard</h3>
          </Link>
          <Link to="/profile" className="active">
            <span>
              <RiProfileLine />
            </span>
            <h3 >Profile</h3>
          </Link>
          <Link to="/prescriptions">
            <span>
              <FaClipboardList />
            </span>
            <h3>Prescriptions</h3>
          </Link>
          <Link to="/exercises">
            <span>
              <GiWeightLiftingUp />
            </span>
            <h3>Exercises</h3>
          </Link>
          <Link to="/reports">
            <span>
              <TbReportMedical />
            </span>
            <h3>Reports</h3>
          </Link>
          <Link onClick={logout}>
            <span>
              <MdLogout />
            </span>
            <h3>Logout</h3>
          </Link>
        </div>
      </aside>
    
  );
};

export default Sidebar;
