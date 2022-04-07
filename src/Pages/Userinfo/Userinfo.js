import React, { useContext } from "react";
import "./Userinfo.scss";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/App";


const Userinfo = () => {
  const navigate = useNavigate()
  // const token = localStorage.getItem("TOKEN");
  const {  userData } = useContext(AppContext);
  console.log(userData);
  const handleClick = () => {
    localStorage.removeItem("TOKEN")
    navigate("/register")
  }

  return !userData ? (
    <h1 className="loading" style={{ color: "#fff" }}> </h1>
  ) : (
    <>
      <div className="userWrap">
        <div className="userCircle">
          <i className="fa-solid fa-face-smile"></i>
        </div>

        <div className="dropSet">
          <i className="fa-solid fa-ellipsis-vertical"></i>
          <ul>
            <li onClick={handleClick}>
              <Link to={"/"}>Log out</Link>
            </li>
            <li>
              <Link to={"/list"}>Go chatlist</Link>
            </li>
          </ul>
        </div>

        <div className="moreInfo">
          <div className="usermeName">{userData?.username}</div>
          <div className="telNum">{userData?.phone}</div>
          <div className="nameme">{userData?.name}</div>
        </div>
      </div>
    </>
  );
};

export default Userinfo;
