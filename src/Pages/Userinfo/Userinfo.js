import React from "react";
import "./Userinfo.scss";
import { Link } from "react-router-dom";

const Userinfo = () => {
  return (
    <>
      <div className="userWrap">
        <div className="userCircle">
          <i className="fa-solid fa-face-smile"></i>
        </div>

        <div className="dropSet">
          <i className="fa-solid fa-ellipsis-vertical"></i>
          <ul>
            <li><Link to={"/"}>Log out</Link></li>
            <li><Link to={"/lichka"}>Go chat</Link></li>
            <li><Link to={"/list"}>Go chatlist</Link></li>
          </ul>
        </div>

        <div className="moreInfo">
            <div className="usermeName">Shuhratbek</div>
            <div className="telNum">+9989895996</div>
            <div className="nameme">Ergashev Shuhrat</div>
        </div>
      </div>
    </>
  );
};

export default Userinfo;
