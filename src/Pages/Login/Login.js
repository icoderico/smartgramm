import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/App";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      navigate("/list");
    }
  }, [navigate]);

  const { setUserData, userData } = useContext(AppContext);
  console.log(userData);
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = new FormData(e.target);
    const data = Object.fromEntries(loginData.entries());
    axios
      .post("https://telegram-alisherjon-api.herokuapp.com/auth", data)
      .then((res) => {
        setUserData(res.data.user);
        const { token } = res.data;
        localStorage.setItem("TOKEN", token);
        console.log(res.data);
        navigate("/user");
        window.location.reload();
      })
      .catch((err) => {
        const { status } = err.response;
        if (status === 404) {
          alert("Password or username is wrong! Please write another one!😁");
          e.target.reset();
        }
      });
  };

  return (
    <>
      <div className="register">
        <form onSubmit={handleSubmit} autoComplete="off">
          <Link to={"/register"}>Register</Link>

          <input
            type="text"
            name="username"
            id="username"
            required
            autoComplete={false}
          />
          <label htmlFor="username" className="labUs">
            Username
          </label>

          <input
            type="password"
            id="password"
            name="password"
            required
            autoComplete={false}
          />
          <label htmlFor="password" className="labPs">
            Password
          </label>

          <button type="submit">Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
