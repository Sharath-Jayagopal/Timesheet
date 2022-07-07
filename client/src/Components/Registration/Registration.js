import React, { useEffect, useState } from "react";
import "./Registration.css";
import axios from "axios";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("guest");

  useEffect(
    (e) => {
      console.log(role);
    },
    [role]
  );

  const registerUser = async (e) => {
    const userData = {
      name,
      email,
      password,
      role,
    };

    await axios
      .post("http://localhost:5000/user/register", userData)
      .then((res) => {
        if (res.data.register) {
          console.log("new user registered !!!");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="registration">
        <form
          className="registration-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <h4>Registration</h4>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br />
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
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option>Admin</option>
            <option>Guest</option>
            <option>Normal</option>
          </select>
          <br />
          <button type="submit" onClick={() => registerUser()}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Registration;
