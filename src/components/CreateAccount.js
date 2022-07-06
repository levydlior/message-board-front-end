import React from "react";

function CreateAccount({onInfoChange, formLogIn}) {
  function handleChange(e) {
    const target = e.target.name;
    const value = e.target.value;
    onInfoChange(target, value);
  }
  return (
    <form>
      <h2>Create An Account:</h2>
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
      <label for="avatar_url">Avatar:</label>
      <input
        placeholder="Image Url"
        name="avatar_url"
        type="text"
        required
        value={formLogIn.avatar_url}
        onChange={handleChange}
      />
      <input type="submit" value="Create account" />
    </form>
  );
}

export default CreateAccount;
