import "./styles/app.css";
import { useEffect, useState } from "react";
import Main from "./components/Main";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/message_board")
      .then((r) => r.json())
      .then((messages) => setMessages(messages));
  }, []);
console.log(messages)




  return (
    <div className="App">
      <header id="header">
        <div id="logo">
          <h1>Leave a message!</h1>
        </div>
        <nav>
          <ul id="head-ul">
            <li>hi</li>
            <li>hi</li>
            <li>hi</li>
          </ul>
        </nav>
      </header>
      <Main messages={messages} />
    </div>
  );
}

export default App;
