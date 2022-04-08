import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Lichka.scss";
import axios from "axios";

const Lichka = () => {
  const [emoj, setEmoj] = useState([]);
  const [msg, setMsg] = useState([]);
  const [string, setString] = useState("");
  const [username, setUsername] = useState("");
  const token = localStorage.getItem("TOKEN");
  const userID = localStorage.getItem("userid")
  const params = useParams();
  const chatId = params.id
  
  useEffect(() => {
    fetch("https://unpkg.com/emoji.json/emoji.json")
      .then((res) => res.json())
      .then((data) => {
        setEmoj(data);
      });
    axios
      .get(`https://telegram-alisherjon-api.herokuapp.com/chats/${params.id}`, {
        headers: { authorization: `Bearer ${localStorage.TOKEN}` },
      })
      .then((response) => { 
        setMsg(response.data.chat.messages);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { text } = Object.fromEntries(formData.entries());
    axios
      .post("https://telegram-alisherjon-api.herokuapp.com/messages",{ text, chatId},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <>
      <div className="lichka">
        <div className="mainchat">
          <div className="headchat">Friend Name</div>
          <ul className="midchat">
            {msg.map((m) => {
              return (
                <>
                  <li key={m._id} className={` ${m.from == userID ? "rightmes" : "leftmes"}`} >
                    <div className="inmes"> {m.text} </div>
                  </li>
                </>
              );
            })}
          </ul>
          <div className="footchat">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="message..."
                name="text"
              />
              <button type="submit">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
              <button>
                <i className="fa-solid fa-rotate-right"></i>
              </button>
            </form>
          </div>
        </div>

        <input type="checkbox" id="check" />
        <label htmlFor="check" className="labelbar">
          <i className="fa-solid fa-bars"></i>
        </label>

        <div className="search">
          <form >
            <input
              type="search"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Search..."
            />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <div className="foundUser">Shuhrat77</div>

          <div className="stikerlar">
            <ul>
              {emoj.map((em) => (
                <li
                  onClick={() => setString((oldString) => oldString + em.char)}
                >
                  {em.char}
                </li>
              ))}
            </ul>
          </div>

          <div className="routing">
            <Link to={"/user"}>
              <i className="fa-solid fa-user"></i>
            </Link>
            <Link to={"/list"}>
              <i className="fa-solid fa-users"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lichka;
