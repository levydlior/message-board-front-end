import "./styles/app.css";
import { useEffect, useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";

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
      <Main messages={messages} />
    </div>
  );
}

export default App;
