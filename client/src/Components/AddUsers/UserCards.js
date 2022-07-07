import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import "./UserCards.css";
const UserCards = () => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    await axios
      .get(`http://localhost:5000/user/user/${user._id}`)
      .then((res) => {
        setUserDetails(res.data.user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="cards">
      {userDetails.users !== undefined
        ? userDetails.users.map((user, index) => (
            <UserCard userId={user} key={index} index={index} />
          ))
        : null}
    </div>
  );
};

export default UserCards;
