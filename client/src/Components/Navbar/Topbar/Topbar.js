import React from "react";
import "./Topbar.css";
import NotificationIcon from "../../../Assets/bell.png";

const Topbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h6>TimeSheeeets</h6>
      </div>

      <div className="navbar-items">
        <ul className="nav-items">
          <li className="nav-item">
            <img src={NotificationIcon} alt="notifications" />
          </li>
          <li className="nav-item">
            <div className="UserInfo">
              <h6>SJ</h6>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
