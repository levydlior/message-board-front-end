import React, { useState } from "react";

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
        <h2>Login:</h2>
        <label htmlFor="login-userName">User Name:</label>
        <input
          name="userName"
          type="text"
          required
          value={formLogIn.userName}
          onChange={handleChange}
        />
        <label htmlFor="login-password">Password:</label>
        <input
          name="password"
          type="password"
          required
          value={formLogIn.password}
          onChange={handleChange}
        />
        <input type="submit" value="Login" />
        {validLogin ? null : (
          <h3 style={{ color: "red" }}>Invalid user name or password</h3>
        )}
      </form>
      <h2>
        Dont have an account?{" "}
        <button onClick={() => onChangeViewClick()}>Create an account</button>
      </h2>
    </>
  );
}

export default Login;
