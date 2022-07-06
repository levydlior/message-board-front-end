import React, { useState } from "react";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

function LoginCreateAccount() {
  const [display, setDisplay] = useState(false);
  const [formLogIn, setFormLogin] = useState({
    user_name: "",
    password: "",
    avatar_url: "",
  });

  function handleChange(target, value) {
    setFormLogin({ ...formLogIn, [target]: value });
  }
  const createOrLogin = display ? (
    <Login onInfoChange={handleChange} formLogIn={formLogIn} />
  ) : (
    <CreateAccount onInfoChange={handleChange} formLogIn={formLogIn} />
  );
  return (
    <div id="login-account">
      {createOrLogin}
      {display ? (
        <h2>
        Dont have an account? <button onClick={()=> setDisplay(false)}>Create an account</button>
      </h2>
      ) : <h2>
      already have an account? <button onClick={()=> setDisplay(true)}>Login</button>
    </h2>}
    </div>
  );
}

export default LoginCreateAccount;
