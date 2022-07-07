import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./UserCard.css";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const UserCard = ({ userId, index }) => {
  const [userDetails, setUserDetails] = useState({});
  const [tasks, setTasks] = useState([]);

  const [completedTasks, setCompletedTasks] = useState(0);
  const [notCompletedTasks, setNotCompletedTasks] = useState(0);
  const getTasks = async () => {
    await axios
      .get(`http://localhost:5000/user/tasks?id=${userId}`)
      .then((res) => {
        setTasks(res.data.tasks);
      })
      .catch((err) => console.log(err));
  };

  const getUserDetails = async () => {
    await axios
      .get(`http://localhost:5000/user/user/${userId}`)
      .then((res) => {
        setUserDetails(res.data.user);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTasks();
    getUserDetails();
  }, []);

  useEffect(() => {
    setCompletedTasks(tasks?.filter((task) => task.completed === true).length);
    setNotCompletedTasks(
      tasks?.filter((task) => task.completed === false).length
    );
  }, [tasks]);

  useEffect(() => {
    const ctx = document.getElementById(`myChart${index}`).getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        labels: ["In Progress", "Completed"],
        datasets: [
          {
            label: "No of Tasks",
            // data: [12, 19, 3, 5, 2, 3],
            data: [notCompletedTasks, completedTasks],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              // "rgba(54, 162, 235, 0.2)",
              // "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              // "rgba(153, 102, 255, 0.2)",
              // "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              // "rgba(54, 162, 235, 1)",
              // "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              // "rgba(153, 102, 255, 1)",
              // "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [notCompletedTasks, completedTasks]);

  return (
    <div className="Card">
      <div className="userDetails">
        <h4>Name : {userDetails?.name}</h4>
        <hr />
        <h4>Total - TASKS : {tasks?.length}</h4>
        <hr />
        <h4>
          Pending - TASKS :{" "}
          {tasks?.filter((task) => task.completed === false).length}
        </h4>
        <hr />
        <h4>
          completed - TASKS :{" "}
          {tasks?.filter((task) => task.completed === true).length}
        </h4>
        <hr />
      </div>

      <div className="graphs">
        <canvas
          id={`myChart${index}`}
          max-width="150px"
          max-height="150px"
        ></canvas>
      </div>
    </div>
  );
};

export default UserCard;
