import React from "react";
import NavBar from "./NavBar";

function Header({ loggedIn, onLogout }) {
  return (
    <header id="header">
      <div id="logo-div">
        <img id="logo"
          src={require('./../images/boardimg.jpg')}
          alt="Website logo - message board"
        />
        <h1>Leave a message!</h1>
      </div>
      <NavBar loggedIn={loggedIn} onLogout={onLogout} />
    </header>
  );
}

export default Header;
