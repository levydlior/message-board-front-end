import React, { useState } from "react";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

function LoginCreateAccount({ onLogin }) {
  const [display, setDisplay] = useState(false);
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
    />
  ) : (
    <CreateAccount
      onInfoChange={handleChange}
      formLogIn={formLogIn}
      createdAccount={createdAccount}
      onCreatedAccount={handleCreateSubmit}
    />
  );
  return (
    <div id="login-account">
      {createOrLogin}
      {display ? (
        <h2>
          Dont have an account?{" "}
          <button onClick={() => setDisplay(false)}>Create an account</button>
        </h2>
      ) : (
        <h2>
          already have an account?{" "}
          <button onClick={() => setDisplay(true)}>Login</button>
        </h2>
      )}
    </div>
  );
}

export default LoginCreateAccount;
