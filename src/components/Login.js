import React from "react";

function Login({onInfoChange, formLogIn}) {
function handleChange(e){
    const target = e.target.name
    const value = e.target.value
    onInfoChange(target, value)
}

  return (
    <form>
        <h2>Login:</h2>
      <label for="login-userName">User Name:</label>
      <input
        name="user_name"
        type="text"
        required
        value={formLogIn.user_name}
        onChange={handleChange}
      />
      <label for="login-password">Password:</label>
      <input
        name="password"
        type="password"
        required
        value={formLogIn.password}
        onChange={handleChange}
      />
      <input type="submit" value="Login" />
    </form>
  );
}

export default Login;
