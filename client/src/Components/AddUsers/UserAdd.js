import React, { useEffect, useState } from "react";
import UserAddHeader from "./UserAddHeader";
import "./UserAdd.css";
import axios from "axios";

const UserAdd = () => {
  const [userId, setUserId] = useState("");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    await axios
      .get("http://localhost:5000/user/users")
      .then((res) => {
        const filteredUsers = res.data.users.filter(
          (user) => user.role !== "admin"
        );
        setUsers(filteredUsers);
      })
      .catch((err) => console.log(err));
  };

  const addUser = async () => {
    const userDetails = JSON.parse(localStorage.getItem("user"));
    if (userId !== "") {
      const payload = {
        id: userDetails._id,
        underUserId: userId,
      };
      await axios
        .post("http://localhost:5000/user/addUser", payload)
        .then((res) => {})
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <UserAddHeader />
      <div className="task-add">
        <form className="task-add-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="userEmail">User Email</label>
          <select
            id="userEmail"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          >
            {users.map((user) => (
              <option value={user._id}>{user.email}</option>
            ))}
          </select>
          <br />
          {/* <label htmlFor="task-name">Task Name :</label>
          <input
            type="text"
            placeholder="Task Name"
            id="task-name"
            value={name}
            // onChange={(e) => setName(e.target.value)}
            disabled
          />
          <br /> */}
          <button type="submit" className="btn-task" onClick={() => addUser()}>
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAdd;
