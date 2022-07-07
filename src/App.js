import "./styles/app.css";
import { useEffect, useState } from "react";
import MessageBoard from "./components/MessageBoard";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import LoginCreateAccount from "./components/LoginCreateAccount";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState({
    userName: "",
    userId: 6,
  });

  function handleLogin(user) {
    console.log(user);
    setLoggedIn(true);
    setLoggedInUser({ userName: user.user_name, userId: user.id });
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
