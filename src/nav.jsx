import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-logo">
        Logo
      </Link>
      <ul>
        <CustomLink to="/upload">Upload</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/signup">Signup</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "active" : ""}>
      <Link href={href} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
