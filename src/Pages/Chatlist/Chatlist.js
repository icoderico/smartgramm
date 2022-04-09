import React, { useContext, useEffect, useState } from "react";
import "./Chatlist.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../Context/App";


const Chatlist = () => {
  const navigate = useNavigate();
  const [mychats, setChats] = useState([]);
  const [myId, setmyId] = useState(null);
  useEffect(() => {
    axios
      .get("https://telegram-alisherjon-api.herokuapp.com/users", {
        headers: { authorization: `Bearer ${localStorage.TOKEN}` },
      })
      .then((response) => {
        setChats(response.data.user.chats);
        setmyId(response.data.user._id);
        localStorage.setItem("userid", response.data.user._id);
      });
  }, []);

  console.log(mychats);
  console.log(myId);

  return (
    <>
      <div className="chatlistWrap">
        <ul>
          {mychats.map((chat) => (
            <Link to={`/lichka/${chat._id}`}>
              <li>
                {console.log(chat.members[0])}
                <div className="circleIcon"></div>
                <div>
                  <div className="friendsName">
                    {chat.members[0] == myId
                      ? chat.members[1].name
                      : chat.members[0].name}
                  </div>
                  <div className="friendsUsername">
                    {chat.members[0] == myId
                      ? chat.members[1].username
                      : chat.members[0].username}
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Chatlist;
