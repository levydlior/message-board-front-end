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

  function handleLogoutClick() {
    setCreatedAccount(false);
    resetInputs();
    onLogOut();
  }

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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Alert severity="success">Welcome {loggedInUser.userName}!</Alert>
          </div>
          <Button
            sx={{ borderColor: "black", color: "black" }}
            onClick={handleLogoutClick}
          >
            Logout
          </Button>
        </div>
      )}
    </div>
  );
}

export default LoginCreateAccount;
