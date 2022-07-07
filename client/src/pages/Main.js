import React from "react";
import { Link } from "react-router-dom";
import "./styles/Main.css";

const Main = () => {
  return (
    <>
      <div className="Header">
        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard">Main</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Main;
