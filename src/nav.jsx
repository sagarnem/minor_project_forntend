import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-logo">
        Logo
      </Link>
      <ul>
        <li>
          {" "}
          <a href="#">Home</a>{" "}
        </li>
        <li>
          {" "}
          <a href="">Home</a>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
