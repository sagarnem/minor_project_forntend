import React, { useState } from "react";
import { Validation, values } from "./LoginValidation";
import { Link, NavLink } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    console.log();
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Log in</h1>
        <input type="email" placeholder="Your email" id="email" />

        <input type="password" placeholder="Password" id="password" />
        <button type="submit">Log In</button>
      </form>
      <Link to="/signup">Don't have an account? Register here</Link>
    </div>
  );
}

export default Login;
