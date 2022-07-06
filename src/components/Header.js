import React from "react";
import NavBar from "./NavBar";

function Header({loggedIn}) {
  return (
    <header id="header">
      <div id="logo">
        <h1>Leave a message!</h1>
      </div>
      <NavBar loggedIn={loggedIn}/>
    </header>
  );
}

export default Header;
