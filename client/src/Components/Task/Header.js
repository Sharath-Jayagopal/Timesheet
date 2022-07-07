import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <ul className="breadcrumb">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard">Tasks</Link>
        </li>
      </ul>

      <div className="create-task-btn">
        <button className="task-btn">
          <Link to="/dashboard/task/add"> Create New Task </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
