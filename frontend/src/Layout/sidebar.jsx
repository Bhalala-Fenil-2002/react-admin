import React from "react";
import { Link } from "react-router-dom";
import "./layout.css";
import SideBarUserPreview from "../assets/sidebar-profile-preview.svg";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-logo">Admin.IO</div>
        <div className="side-profile-icon-info text-center">
          <div className="profile-pic">
            <img src={SideBarUserPreview} alt="sidebar user preview" />
          </div>
          <Link>Jone Dou</Link>
          <p className="designation">Adminer</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
