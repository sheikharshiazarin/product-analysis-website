import React from "react";

import Logo from "../../Assets/Image/logo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const Navbar = () => {
  //   const { pathname } = useLocation();

  return (
    <nav
    //   style={
    //     pathname.includes("blog") ? { display: "none" } : { display: "flex" }
    //   }
    >
      <div className="logo-container">
        <img src={Logo} alt="" />
        <h1>Birdy</h1>
      </div>
      <div className="link-container">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/reviews"
        >
          Reviews
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/videos"
        >
          Videos
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/login"
        >
          Login
        </NavLink>
        {/* <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/videos"
        >
          Videos
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/login"
        >
          Login
        </NavLink> */}
      </div>
    </nav>
  );
};

export default Navbar;
