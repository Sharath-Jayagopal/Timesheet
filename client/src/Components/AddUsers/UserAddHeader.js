import React from "react";
import { Link } from "react-router-dom";
import "./UserAddHeader.css";

const UserAddHeader = () => {
  return (
    <div className="Header">
      <ul className="breadcrumb">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard">User</Link>
        </li>
        <li>
          <Link to="/dashboard">Add</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserAddHeader;
