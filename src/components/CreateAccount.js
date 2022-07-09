import React, { useState } from "react";
import { Input, Button, Alert } from "@mui/material";

function CreateAccount({
  onInfoChange,
  formLogIn,
  createdAccount,
  onCreatedAccount,
  onChangeViewClick,
  OnresetInputs,
}) {
  const [existedUserName, setExistedUserName] = useState(false);
  function handleChange(e) {
    const target = e.target.name;
    const value = e.target.value;
    onInfoChange(target, value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    OnresetInputs();
    fetch("http://localhost:9292/user/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(formLogIn),
    })
      .then((r) => r.json())
      .then((user) => {
        if (user === "failed") {
          setExistedUserName(true);
        } else {
          onCreatedAccount(true);
        }
      });
  }

  function displayCreateAccount() {
    if (!createdAccount) {
      return (
        <>
          <form onSubmit={handleSubmit}>
            <h2 className="content-title">Create An Account:</h2>
            <label for="login-userName">User Name:</label>
            <Input
              multiline={true}
              name="userName"
              type="text"
              required
              value={formLogIn.user_name}
              onChange={handleChange}
            />
            {existedUserName ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Alert severity="error">
                  User name already exist please choose another!
                </Alert>
              </div>
            ) : null}
            <label for="login-password">Password:</label>
            <Input
              multiline={true}
              name="password"
              type="password"
              required
              value={formLogIn.password}
              onChange={handleChange}
            />
            <label for="avatar_url">Avatar:</label>
            <Input
              placeholder="Image Url"
              name="avatarUrl"
              type="text"
              required
              value={formLogIn.avatar_url}
              onChange={handleChange}
            />
            <Input type="submit" value="Create account" />
          </form>
          <div className="have-an-account-login">
            <h3 style={{ margin: "2rem" }}>already have an account?</h3>
            <Button
              sx={{ borderColor: "black", color: "black" }}
              size="small"
              variant="outlined"
              onClick={() => onChangeViewClick()}
            >
              Login
            </Button>
          </div>
        </>
      );
    } else {
      return (
        <h2>
          {" "}
          account Created -- please login!{" "}
          <Button
            variant="outlined"
            sx={{ borderColor: "black", color: "black" }}
            onClick={() => onChangeViewClick()}
          >
            Login
          </Button>
        </h2>
      );
    }
  }

  return displayCreateAccount();
}

export default CreateAccount;
