import React, { useState } from "react";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

function LoginCreateAccount({ onLogin, loggedIn, loggedInUser }) {
  const [display, setDisplay] = useState(true);
  const [createdAccount, setCreatedAccount] = useState(false);
  const [formLogIn, setFormLogin] = useState({
    userName: "",
    password: "",
    avatarUrl: "",
  });

  function resetInputs() {
    setFormLogin({
      userName: "",
      password: "",
      avatarUrl: "",
    });
  }

  function handleCreateSubmit() {
    setCreatedAccount(true);
    resetInputs();
  }

  function hanldeLoginSubmit() {
    resetInputs();
  }

  function handleChange(target, value) {
    setFormLogin({ ...formLogIn, [target]: value });
  }
  const createOrLogin = display ? (
    <Login
      onInfoChange={handleChange}
      formLogIn={formLogIn}
      onLogin={onLogin}
      onLoginSubmit={hanldeLoginSubmit}
      onChangeViewClick={() => setDisplay(false)}
    />
  ) : (
    <CreateAccount
      onInfoChange={handleChange}
      formLogIn={formLogIn}
      createdAccount={createdAccount}
      onCreatedAccount={handleCreateSubmit}
      onChangeViewClick={() => setDisplay(true)}
    />
  );
  return (
  <div id="login-account">
    {!loggedIn? createOrLogin : <h2>Welcome {loggedInUser.userName}!</h2> }
    </div>)
}

export default LoginCreateAccount;
