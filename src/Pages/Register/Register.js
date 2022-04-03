import React from "react";
import "./Register.scss";
import { Link} from "react-router-dom";


const Register = () => {


  return (
    <>
      <div className="register">
        <form>
          <Link to={"/login"}>I have an account</Link>

          <input type="text" id="name" required autoComplete="off"/>
          <label htmlFor="name" className="labName">
            Name
          </label>

          <input type="number" id="phNumber" required autoComplete="off"/>
          <label htmlFor="phNumber" className="labPh">Phone Number</label>

          <input type="text" id="username" required autoComplete="off"/>
          <label htmlFor="username" className="labUs">Username</label>

          <input type="text" id="password" required autoComplete="off"/>
          <label htmlFor="password" className="labPs">Password</label>


          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
