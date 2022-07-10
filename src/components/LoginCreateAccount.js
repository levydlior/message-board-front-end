import React, { useState } from "react";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import { Button, Alert } from "@mui/material";

function LoginCreateAccount({ onLogin, loggedIn, loggedInUser, onLogOut }) {
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

  function hanldeResetForm() {
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
      onLoginSubmit={hanldeResetForm}
      onChangeViewClick={() => {
        setDisplay(false);
        resetInputs();
      }}
    />
  ) : (
    <CreateAccount
      onInfoChange={handleChange}
      formLogIn={formLogIn}
      createdAccount={createdAccount}
      onCreatedAccount={handleCreateSubmit}
      onChangeViewClick={() => {
        setDisplay(true);
        resetInputs();
      }}
      OnresetInputs={hanldeResetForm}
    />
  );
  return (
    <div id="login-account">
      {!loggedIn ? (
        createOrLogin
      ) : (
        <div id="logout-div">
          <Alert
            severity="success"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Logged in
          </Alert>
          <h2>Welcome {loggedInUser.userName}!</h2>
        </div>
      )}
    </div>
  );
}

export default LoginCreateAccount;
