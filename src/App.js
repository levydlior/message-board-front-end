import "./styles/app.css";
import { useEffect, useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/message_board")
      .then((r) => r.json())
      .then((messages) => setMessages(messages));
  }, []);
console.log(messages)



const displayMessages = messages.map(message => {
  const timestamp = new Date(message.created_at).toLocaleTimeString();
  return (
    <li className="message-box">
      <img className="message-profile-pic" src={message.avatar_url} alt="profile picture" />
      <h4>{message.user_name}</h4>
      <p>{message.content}</p>
      <p>{timestamp}</p>
    </li>
  )
})

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

      <main id="main">
        <div id="message-board">
          <h2> Messages:</h2>
          <div id="messages-display">
            <ul>
             {displayMessages}
            </ul>
          </div>
          <div id="add-message">
            <h3>Post a message!</h3>
            <form>
              <input type="text" required id="new-meesage-input" />
              <input type="submit" required value="post" />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
