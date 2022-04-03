import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="register">
        <form>
          <Link to={"/register"}>Register</Link>

          <input type="text" id="username" required autoComplete="off" />
          <label htmlFor="username" className="labUs">
            Username
          </label>

          <input type="text" id="password" required autoComplete="off" />
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
