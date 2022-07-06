import "./styles/app.css";
import { useEffect, useState } from "react";
import MessageBoard from './components/MessageBoard'
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import LoginCreateAccount from "./components/LoginCreateAccount";

function App() {
  const [messages, setMessages] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(() => {
    fetch("http://localhost:9292/message_board")
      .then((r) => r.json())
      .then((messages) => setMessages(messages));
  }, []);
  console.log(messages);

  return (
    <div className="App">
     <Header loggedIn={loggedIn}/>
     <main id="main">
     <Switch>
      <Route exact path='/'>
      <MessageBoard messages={messages} loggedIn={loggedIn} />
      </Route>
      <Route exact path='/create-login'>
        <LoginCreateAccount />
      </Route>
      <Route path='*'>
        <h1>Error - wrong address</h1>
      </Route>
      </Switch>
     </main>
    
    </div>
  );
}

export default App;
