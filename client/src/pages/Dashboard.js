import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import AddUsers from "../Components/AddUsers/AddUsers";
import Sidebar from "../Components/Navbar/Sidebar/Sidebar";
import Topbar from "../Components/Navbar/Topbar/Topbar";
import Preferences from "../Components/Preferences/Preferences";
import Report from "../Components/Reports/Report";
import "./styles/Dashboard.css";
import Main from "./Main";
import Task from "../Components/Task/Task";
import TaskAdd from "../Components/Task/TaskAdd";
import UserAdd from "../Components/AddUsers/UserAdd";

const Dashboard = () => {
  const history = useHistory();

  useEffect(() => {
    console.log(history.location.pathname);
  }, []);

  return (
    <>
      <div className="dashboard">
        <div>
          <Topbar />
        </div>
        <div className="grid">
          <div className="sidebar-container">
            <Sidebar />
          </div>
          {/* children paths */}
          <div className="container">
            {history.location.pathname === "/dashboard/" ||
            history.location.pathname === "/dashboard" ? (
              <>
                <Task />
              </>
            ) : null}
            <Switch>
              <Route path="/dashboard/Main" component={Main} />
              <Route path="/dashboard/addUser" component={AddUsers} />
              <Route path="/dashboard/reports" component={Report} />
              <Route path="/dashboard/preferences" component={Preferences} />
              <Route path="/dashboard/task/add" component={TaskAdd} />
              <Route path="/dashboard/user/add" component={UserAdd} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
