import React, { useContext, useEffect, useState } from "react";
import "./Chatlist.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../Context/App";

const Chatlist = () => {
  const [searchName, setSearchName] = useState(null);
  const [userSearch, setUserSearch] = useState("");
  const token = localStorage.getItem("TOKEN");
  const friendId = localStorage.getItem("friendId");
  const params = useParams();
  const chatId = params.id;

  const handleUserSearch = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://telegram-alisherjon-api.herokuapp.com/users/${userSearch}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const { data } = response;
        console.log(data);
        setSearchName(data);
        const friendId = data.user._id;
        localStorage.setItem("friendId", friendId);
      });
  };
  const handleClick = () => {
    axios
      .post(
        `https://telegram-alisherjon-api.herokuapp.com/chats`,
        {
          friendId,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const id = response.data.chat._id;
        localStorage.setItem("chatId", id);
        navigate(`/lichka/${id}`);
      });
  };

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
        console.log(response.data);
        localStorage.setItem("userid", response.data.user._id);
      });
  }, []);

  console.log(mychats);
  console.log(myId);

  return (
    <>
      <div className="chatlistWrap">
        <div>
          <div className="search">
            <form onSubmit={handleUserSearch}>
              <input
                type="search"
                value={userSearch}
                onChange={(e) => setUserSearch(e.target.value)}
                placeholder="Search..."
              />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>

            {searchName && (
              <div className="foundUser" onClick={handleClick}>
                {searchName.user.name}
              </div>
            )}
          </div>

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
      </div>
    </>
  );
};

export default Chatlist;
