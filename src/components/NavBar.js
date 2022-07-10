import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ loggedIn, onLogout }) {
  const displayLink = loggedIn ? (
    <NavLink className="nav-links" exact to="/my-profile">
      My Profile
    </NavLink>
  ) : null;
  function handleClick(e){
    e.preventDefault()
    onLogout()
  }


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
          <NavLink className="nav-links" exact to="/create-login" onClick={handleClick}>
           Logout
          </NavLink>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
