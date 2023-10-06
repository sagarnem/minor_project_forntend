import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "./logo.png";
import "./nav.css";

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <header>
        <nav className="nav">
          <Link to="/" className="site-logo">
            <img src={logo} alt="logo" className="logo" />
          </Link>

          <div className="nav-btn">
            <div className="toggle-button" onClick={toggleMenu}></div>
            <ul className={menuVisible ? "active" : ""}>
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/upload">Upload</CustomLink>
              <CustomLink to="/contact">Contact</CustomLink>
              <CustomLink to="/login">Login</CustomLink>
              <CustomLink to="/signup">Signup</CustomLink>
            </ul>
          </div>
        </nav>
      </header>
      <hr />
    </>
  );
}


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
