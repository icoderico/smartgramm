import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Lichka.scss";
import axios from "axios";
import { AppContext } from "../../Context/App";

const Lichka = () => {
  const [emoj, setEmoj] = useState([]);
  const [string, setString] = useState("");
  const [msg, setMsg] = useState([])
  const params = useParams()

  useEffect(() => {
    fetch("https://unpkg.com/emoji.json/emoji.json")
      .then((res) => res.json())
      .then((data) => {
        setEmoj(data)
      });
      axios.get(`https://telegram-alisherjon-api.herokuapp.com/chats/${params.id}`, {
            headers: {authorization: `Bearer ${localStorage.TOKEN}`}
        }).then(response => {
          console.log(response, 'add')  
            setMsg(response.data.chat.messages)
        })
  }, []);

  console.log(params.id)
  const smth = localStorage.getItem("TOKEN")
  console.log(smth)

  return (
    <>
      <div className="lichka">
        <div className="mainchat">
          <div className="headchat">Friend Name</div>
          <ul className="midchat">
         {msg.map(m =>{  
           console.log(m);         
           return(
             <>
                <li className={` ${ m._id == m.from ? "leftmes" : "rightmes"}`}>
                  <div className="inmes"> {m.text} </div>{" "}
                </li>
             </>
           )
         })}
          </ul>
          <div className="footchat">
            <form>
              <input
                type="text"
                placeholder="message..."
                value={string}
                onChange={(e) =>
                  setString(e.target.value)
                }
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
