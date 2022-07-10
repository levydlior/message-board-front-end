// import "./styles/app.css";
import { useState } from "react";
import MessageBoard from "./components/MessageBoard";
import Header from "./components/Header";
import { Route, Switch, useHistory } from "react-router-dom";
import LoginCreateAccount from "./components/LoginCreateAccount";
import MyProfile from "./components/MyProfile";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({
    userName: "",
    userId: "",
  });

  const history = useHistory();

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
    history.push("/create-login");
  }

  function handleAccountDelete() {
    setLoggedIn(false);
    setLoggedInUser({
      userName: "",
      userId: "",
    });
  }

  return (
    <div id="app">
      <Header loggedIn={loggedIn} onLogout={handleLogOut} />
      <div id="main">
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
          {loggedIn ? (
            <Route exact path="/my-profile">
              <MyProfile
                userId={loggedInUser.userId}
                onAccountDelete={handleAccountDelete}
              />
            </Route>
          ) : null}
          <Route path="*">
            <h1>Error - wrong address</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
