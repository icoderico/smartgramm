import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Lichka.scss";

const Lichka = () => {
  const [emoj, setEmoj] = useState([]);

  useEffect(() => {
    fetch("https://unpkg.com/emoji.json/emoji.json")
      .then((res) => res.json())
      .then((data) => setEmoj(data));
  }, []);


  return (
    <>
      <div className="lichka">
        <div className="mainchat">
          <div className="headchat">Friend Name</div>
          <ul className="midchat">
            <li className="leftmes">
              {" "}
              <div className="inmes">Salom</div>{" "}
            </li>
            <li className="rightmes">
              {" "}
              <div className="inmes">Nma gap</div>{" "}
            </li>
          </ul>
          <div className="footchat">
            <form>
              <input type="text" placeholder="message..." />
              <button type="submit">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <input type="checkbox" id="check" />
        <label htmlFor="check" className="labelbar">
          <i className="fa-solid fa-bars"></i>
        </label>

        <div className="search">
          <form>
            <input type="search" placeholder="Search..." />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <div className="foundUser">Shuhrat77</div>

          <div className="stikerlar">
            <ul>
              {emoj.map((em) => (
                <li>{em.char}</li>
              ))}
            </ul>
          </div>



            <div className="routing">
              <Link to={"/user"}><i className="fa-solid fa-user"></i></Link>
              <Link to={"/list"}><i className="fa-solid fa-users"></i></Link>
            </div>

        </div>
      </div>
    </>
  );
};

export default Lichka;
