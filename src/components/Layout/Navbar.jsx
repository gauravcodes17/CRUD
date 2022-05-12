import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            React Users
            <i className="fas fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#81ecec" : "",
                  };
                }}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-links"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#81ecec" : "",
                  };
                }}
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#81ecec" : "",
                  };
                }}
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <Link to="/users/add" className="add-user">Add User</Link>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
