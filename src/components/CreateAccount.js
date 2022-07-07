import React, { useState } from "react";

function CreateAccount({
  onInfoChange,
  formLogIn,
  createdAccount,
  onCreatedAccount,
  onChangeViewClick,
  OnresetInputs
}) {
  const [existedUserName, setExistedUserName] = useState(false);
  function handleChange(e) {
    const target = e.target.name;
    const value = e.target.value;
    onInfoChange(target, value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    OnresetInputs()
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
            <h2>Create An Account:</h2>
            <label for="login-userName">User Name:</label>
            <input
              name="userName"
              type="text"
              required
              value={formLogIn.user_name}
              onChange={handleChange}
            />
            {existedUserName ? (
              <h3 style={{ color: "red" }}>
                User Name already exists please choose another
              </h3>
            ) : null}
            <label for="login-password">Password:</label>
            <input
              name="password"
              type="password"
              required
              value={formLogIn.password}
              onChange={handleChange}
            />
            <label for="avatar_url">Avatar:</label>
            <input
              placeholder="Image Url"
              name="avatarUrl"
              type="text"
              required
              value={formLogIn.avatar_url}
              onChange={handleChange}
            />
            <input type="submit" value="Create account" />
          </form>
          <h2>
            already have an account?
            <button onClick={() => onChangeViewClick()}>Login</button>
          </h2>
        </>
      );
    } else {
      return <h2> account Created -- please login! <button onClick={() => onChangeViewClick()}>Login</button></h2>;
    }
  }

  return displayCreateAccount();
}

export default CreateAccount;
