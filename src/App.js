import "./styles/app.css";
import { useEffect, useState } from "react";
import MessageBoard from "./components/MessageBoard";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import LoginCreateAccount from "./components/LoginCreateAccount";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({
    userName: "",
    userId: "",
  });

  function handleLogin(user) {
    setLoggedIn(true);
    setLoggedInUser({ userName: user.user_name, userId: user.id });
  }

  function handleLogOut() {
    setLoggedIn(false);
    setLoggedInUser({
      userName: "",
      userId: "",
    });
  }

  return (
    <div className="App">
      <Header loggedIn={loggedIn} />
      <main id="main">
        <Switch>
          <Route exact path="/">
            <MessageBoard loggedIn={loggedIn} loggedInUser={loggedInUser} />
          </Route>
          <Route exact path="/create-login">
            <LoginCreateAccount
              onLogin={handleLogin}
              loggedIn={loggedIn}
              loggedInUser={loggedInUser}
              onLogOut={handleLogOut}
            />
          </Route>
          <Route path="*">
            <h1>Error - wrong address</h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
