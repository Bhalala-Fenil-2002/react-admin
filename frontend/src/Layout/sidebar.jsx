import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layout.css";
import SideBarUserPreview from "../assets/sidebar-profile-preview.svg";
import SpeedoMeter from "../assets/speedometer.svg";
import SubMenu from "../assets/sub-menu-icon.svg";
import Setting from "../assets/setting.svg";
import Cards from "../assets/cards.svg";
import Users from "../assets/users.svg";
import Transaction from "../assets/transaction.svg";
import ArrowLeft from "../assets/arrow-left.svg";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-logo">Admin.IO</div>
        <div className="side-profile-icon-info text-center">
          <div className="profile-pic">
            <img src={SideBarUserPreview} alt="user-preview" />
          </div>
          <Link className="user-name">Jone Dou</Link>
          <p className="designation">Adminer</p>
        </div>
        <div className="sidebar-menus">
          <ul className="menu-list">
            <li
              className={`menu-item menu-with-sub-item ${
                openMenus["menu1"] ? "menu-should-openig" : ""
              }`}
              onClick={() => toggleMenu("menu1")}
            >
              <Link className="menu-link">
                <img src={SpeedoMeter} alt="speedometer icon" />
                <p>
                  Dashboard
                  <img src={ArrowLeft} alt="" />
                </p>
              </Link>
              <ul
                className={`menu-sub-list ${
                  openMenus["menu1"] ? "d-block" : "d-none"
                }`}
              >
                <li className="menu-sub-item">
                  <Link className="menu-sub-link" to="/">
                    <img src={SubMenu} alt="speedometer icon" />
                    Home
                  </Link>
                </li>
                <li className="menu-sub-item">
                  <Link className="menu-sub-link" to="/">
                    <img src={SubMenu} alt="speedometer icon" />
                    Home
                  </Link>
                </li>
                <li className="menu-sub-item">
                  <Link className="menu-sub-link" to="/">
                    <img src={SubMenu} alt="speedometer icon" />
                    Home
                  </Link>
                </li>
                <li className="menu-sub-item">
                  <Link className="menu-sub-link" to="/">
                    <img src={SubMenu} alt="speedometer icon" />
                    Home
                  </Link>
                </li>
                <li className="menu-sub-item">
                  <Link className="menu-sub-link" to="/">
                    <img src={SubMenu} alt="speedometer icon" />
                    Home
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to={"/"} className="menu-link">
                <img src={Setting} alt="setting icon" />
                <p>
                  Setting
                  {/* <img src={ArrowDown} alt="" /> */}
                </p>
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/"} className="menu-link">
                <img src={Cards} alt="cards icon" />
                <p>
                  Payment
                  {/* <img src={ArrowDown} alt="" /> */}
                </p>
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/"} className="menu-link">
                <img src={Users} alt="users icon" />
                <p>
                  Users
                  {/* <img src={ArrowDown} alt="" /> */}
                </p>
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/"} className="menu-link">
                <img src={Transaction} alt="transaction icon" />
                <p>
                  Transaction
                  {/* <img src={ArrowDown} alt="" /> */}
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
