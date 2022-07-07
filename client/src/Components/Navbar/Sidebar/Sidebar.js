import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const userDetails = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="sidebar">
        <ul className="sidebar-items">
          <h6>Main</h6>
          <li className="sidebar-item">
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Dashboard
            </Link>
          </li>
          {userDetails.role === "admin" ? (
            <li className="sidebar-item">
              <Link
                to="/dashboard/addUser"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Add users
              </Link>
            </li>
          ) : null}
          {/* <li className="sidebar-item">
            <Link
              to="/dashboard/Tasks"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Tasks
            </Link>
          </li> */}
          <hr />
          {userDetails.role === "admin" ? (
            <>
              <h6>Reports</h6>
              <li className="sidebar-item">
                <Link
                  to="/dashboard/reports"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Reports
                </Link>
              </li>
              <hr />
              {/* <h6>Others</h6>
              <li className="sidebar-item">
                <Link
                  to="/dashboard/preferences"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Preferences
                </Link>
              </li>
              <hr /> */}
            </>
          ) : null}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
