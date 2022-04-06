import React, { useContext } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/App";

const Register = () => {
  const navigate = useNavigate();
  const { setUserData, userData } = useContext(AppContext);

  console.log(userData);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    axios
      .post("https://telegram-alisherjon-api.herokuapp.com/users", data)
      .then((res) => {
        console.log(res.data);
        const { token } = res.data;
        const { status } = res.data;
        const { user } = res.data;
        setUserData(user)
        localStorage.setItem("TOKEN", token);
        if (status === 201) {
          navigate("/user");
        }
      })
      .catch((err) => {
        const { message } = err.response.data;
        console.log(message);
        if (message === "User Already Exists") {
          alert("User Already Exists! Please choose another one!!!😁 ");
          e.target.reset();
        }
      });
  };

  return (
    <>
      <div className="register">
        <form onSubmit={handleSubmit}>
          <Link to={"/login"}>I have an account</Link>

          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="off"
          />
          <label htmlFor="name" className="labName">
            Name
          </label>

          <input
            type="number"
            id="phNumber"
            name="phone"
            required
            autoComplete="off"
          />
          <label htmlFor="phNumber" className="labPh">
            Phone Number
          </label>

          <input
            type="text"
            id="username"
            name="username"
            required
            autoComplete="off"
          />
          <label htmlFor="username" className="labUs">
            Username
          </label>

          <input
            type="password"
            id="password"
            name="password"
            required
            autoComplete="off"
          />
          <label htmlFor="password" className="labPs">
            Password
          </label>

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
