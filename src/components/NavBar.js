import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ loggedIn }) {
  const displayLink = loggedIn ? (
    <NavLink className="nav-links" exact to="/account">
      My Account
    </NavLink>
  ) : null;

  return (
    <nav>
      <ul id="head-ul">
        <NavLink className="nav-links" exact to="/">
          Message Board
        </NavLink>
        {displayLink}
        {!loggedIn ? (
          <NavLink className="nav-links" exact to="/create-login">
            Login/ Create an Account
          </NavLink>
        ) : (
          <NavLink className="nav-links" exact to="/create-login">
            To Logout
          </NavLink>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
