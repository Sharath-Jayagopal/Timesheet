import React from "react";
import { Link } from "react-router-dom";
import "./TaskAddHeader.css";

const TaskAddHeader = () => {
  return (
    <div className="Header">
      <ul className="breadcrumb">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard">Task</Link>
        </li>
        <li>
          <Link to="/dashboard">Add</Link>
        </li>
      </ul>
    </div>
  );
};

export default TaskAddHeader;
