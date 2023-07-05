import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="form-container">
      <form className="register-form">
        <h1> Sign up </h1>
        <input name="name" id="name" placeholder="Full name" type="text" />

        <input type="email" placeholder="Your email" id="email" />

        <input type="password" placeholder="Password" id="password" />
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirm-password"
        />
        <button type="submit">Sign up</button>
      </form>
      <Link to="/login" className="link-btn">
        {" "}
        Already have an account? Register here
      </Link>
    </div>
  );
}

export default Register;
