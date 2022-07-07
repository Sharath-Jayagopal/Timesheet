import React from "react";
import Header from "./Header";
import "./Task.css";
import TaskTable from "./TaskTable";
const Task = () => {
  return (
    <div className="Task">
      <Header />

      <TaskTable />
    </div>
  );
};

export default Task;
