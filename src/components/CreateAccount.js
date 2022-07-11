import React, { useState } from "react";
import { Button, Alert, TextField } from "@mui/material";

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
          <form id="create-account-login-form" onSubmit={handleSubmit}>
            <h2 className="content-title">Create An Account:</h2>
            <TextField
              style={{ marginBottom: "1rem" }}
              required
              id="outlined-required"
              label="User Name"
              value={formLogIn.user_name}
              onChange={handleChange}
              name="userName"
              sx={{ outlineColor: "black" }}
            />
            {existedUserName ? (
              <div>
                <Alert severity="error" style={{ marginBottom: "1rem" }}>
                  User name already exist please choose another!
                </Alert>
              </div>
            ) : null}
            <TextField
              style={{ marginBottom: "1rem" }}
              required
              label="Password"
              name="password"
              type="password"
              value={formLogIn.password}
              onChange={handleChange}
              sx={{ outlineColor: "black" }}
            />

            <TextField
              name="avatarUrl"
              type="text"
              required
              label="Avatar URL"
              value={formLogIn.avatar_url}
              onChange={handleChange}
              style={{ marginBottom: "1rem" }}
              sx={{ outlineColor: "black" }}
            />
            <Button
              style={{
                color: "black",
                borderColor: "black",
                width: "25%",
                marginTop: "1rem",
              }}
              type="submit"
              value="post"
              variant="outlined"
            >
              Create
            </Button>
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
        <div id="account-created-respon">
          <h2 style={{marginBottom: '1rem'}}>Account Created -- please login! </h2>
          <Button
          style={{width: '50%'}}
            variant="outlined"
            sx={{ borderColor: "black", color: "black" }}
            onClick={() => onChangeViewClick()}
          >
            Login
          </Button>
        </div>
      );
    }
  }

  return displayCreateAccount();
}

export default CreateAccount;
