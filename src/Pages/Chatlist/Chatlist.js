import React, { useEffect } from "react";
import "./Chatlist.scss";
import { Link, useNavigate } from "react-router-dom";

const Chatlist = () => {
  const navigate = useNavigate();

  navigate('/lichka')

  return (
    <>
      <div className="chatlistWrap">
        <ul>
          <li onClick={navigate}>
            <div className="circleIcon"></div>
            <div className="friendsName">Diyor Mirpolatov</div>
          </li>
          <li>
            <div className="circleIcon"></div>
            <div className="friendsName">Dilshod Hojakov</div>
          </li>
          <li>
            <div className="circleIcon"></div>
            <div className="friendsName">Shaxnoza</div>
          </li>
          <li>
            <div className="circleIcon"></div>
            <div className="friendsName">Shaxnoza</div>
          </li>
          <li>
            <div className="circleIcon"></div>
            <div className="friendsName">Shaxnoza</div>
          </li>
          <li>
            <div className="circleIcon"></div>
            <div className="friendsName">Shaxnoza</div>
          </li>
          <li>
            <div className="circleIcon"></div>
            <div className="friendsName">Shaxnoza</div>
          </li>
          <li>
            <div className="circleIcon"></div>
            <div className="friendsName">Shaxnoza</div>
          </li>
          <li>
            <div className="circleIcon"></div>
            <div className="friendsName">Shaxnoza</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Chatlist;
