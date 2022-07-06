import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ loggedIn }) {
    console.log(loggedIn, "logged")
  const displayLink = loggedIn ? (
    <NavLink className="nav-links" exact to="/account">
      My Account
    </NavLink>
  ) : (
    <NavLink className="nav-links" exact to="/create-login">
      Login/ Create an Account
    </NavLink>
  );

  return (
    <nav>
      <ul id="head-ul">
        <NavLink className="nav-links" exact to="/">
          Message Board
        </NavLink>
        {displayLink}
      </ul>
    </nav>
  );
}

export default NavBar;
