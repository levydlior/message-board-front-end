import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul id="head-ul">
        <NavLink className="nav-links" exact to="/">Message Board</NavLink>
        <NavLink className="nav-links" exact to="/account">My Account</NavLink>
        <NavLink className="nav-links" exact to="/create-login">Login/ Create an Account</NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
