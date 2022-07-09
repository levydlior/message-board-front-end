import React, { useState } from "react";
import { Input, Button, Alert } from "@mui/material";

function Login({
  onInfoChange,
  formLogIn,
  onLogin,
  onLoginSubmit,
  onChangeViewClick,
}) {
  const [validLogin, setValidLogin] = useState(true);
  function handleChange(e) {
    const target = e.target.name;
    const value = e.target.value;
    onInfoChange(target, value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(formLogIn),
    })
      .then((r) => r.json())
      .then((user) => {
        onLoginSubmit();
        if (!user) {
          setValidLogin(false);
        } else {
          onLogin(user);
        }
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="content-title">Login:</h2>

        <label htmlFor="login-userName">User Name:</label>
        <Input
          multiline={true}
          name="userName"
          type="text"
          required
          value={formLogIn.userName}
          onChange={handleChange}
        />
        <label htmlFor="login-password">Password:</label>
        <Input
          multiline={true}
          name="password"
          type="password"
          required
          value={formLogIn.password}
          onChange={handleChange}
        />
        <Input type="submit" value="Login" />
        {validLogin ? null : (
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <Alert severity="error">Invalid user name or password</Alert>
          </div>
        )}
      </form>
      <div className="have-an-account-login">
        <h3 style={{ margin: "2rem" }}>Dont have an account? </h3>
        <Button
        sx={{ borderColor: "black", color: 'black' }}
          size="small"
          variant="outlined"
          onClick={() => onChangeViewClick()}
        >
          Create an account
        </Button>
      </div>
    </>
  );
}

export default Login;
