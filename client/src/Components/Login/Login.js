import axios from "axios";
import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const loginUser = async () => {
    const userData = { email, password };
    await axios
      .post("http://localhost:5000/user/login", userData)
      .then((res) => {
        const { user, login } = res.data;
        if (login) {
          localStorage.setItem("user", JSON.stringify(user));
          history.push("/dashboard");
        } else {
          console.log("Not Logged in");
        }
      });
  };

  return (
    <>
      <div className="login">
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <h4>Login</h4>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <button type="submit" onClick={() => loginUser()}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
