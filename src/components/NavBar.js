import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ loggedIn, onLogout, idName, ulIdName }) {
  const displayLink = loggedIn ? (
    <NavLink
      className={({ isActive }) => (isActive ? "active" : "inactive")}
      exact
      to="/my-profile"
    >
      My Profile
    </NavLink>
  ) : null;
  function handleClick(e) {
    e.preventDefault();
    onLogout();
  }

  return (
    <nav id={idName}>
      <ul id={ulIdName}>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          exact
          to="/"
        >
          Message Board
        </NavLink>
        {displayLink}
        {!loggedIn ? (
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            exact
            to="/create-login"
          >
            Login/ Create an Account
          </NavLink>
        ) : (
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            exact
            to="/create-login"
            onClick={handleClick}
          >
            Logout
          </NavLink>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
