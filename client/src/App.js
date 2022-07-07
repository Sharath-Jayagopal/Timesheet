import React from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddUsers from "./Components/AddUsers/AddUsers";
import Report from "./Components/Reports/Report";
import Preferences from "./Components/Preferences/Preferences";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Registration" component={Registration} />
          {/* dashboard route */}
          <Route path="/dashboard" component={Dashboard} />
          <Route component={Error} />
          {/* <Route path="/addUser" element={<AddUsers />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/preferences" element={<Preferences />} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
