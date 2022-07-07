import React, { useEffect, useState } from "react";
import TaskAddHeader from "./TaskAddHeader";
import "./TaskAdd.css";
import axios from "axios";

const TaskAdd = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [completed, setCompleted] = useState(false);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    await axios
      .get("http://localhost:5000/user/users")
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => console.log(err));
  };

  const createTask = async () => {
    const task = {
      name,
      description,
      dueDate,
      assignedTo,
      completed,
    };

    await axios
      .post("http://localhost:5000/user/task", task)
      .then((res) => {
        alert("task created successfully");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <TaskAddHeader />
      <div className="task-add">
        <form className="task-add-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="task-name">Task Name :</label>
          <input
            type="text"
            placeholder="Task Name"
            id="task-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="task-desc">Task Description :</label>
          <textarea
            type="text"
            placeholder="Task Description"
            id="task-desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="due-date">Due Date</label>
          <input
            type="date"
            placeholder="Due Date"
            id="due-date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <label htmlFor="AssignedTo">Assigned To:</label>
          <select
            id="AssignedTo"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
          >
            {users.map((user) => (
              <option value={user._id}>{user.email}</option>
            ))}
          </select>
          <button
            type="submit"
            className="btn-task"
            onClick={() => createTask()}
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskAdd;
