import "./styles/app.css";
import { useEffect, useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/message_board")
      .then((r) => r.json())
      .then((messages) => setMessages(messages));
  }, []);
  console.log(messages);

  return (
    <div className="App">
     <Header />
     <Switch>
      <Route exact path='/'>
      <Main messages={messages} />
      </Route>
      <Route path='*'>
        <h1>Error - wrong address</h1>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
