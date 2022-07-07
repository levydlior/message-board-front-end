import React, { useState, useEffect } from "react";
import PostMessage from "./PostMessage";
import MessagesList from "./MessagesList";

function MessageBoard({ loggedIn, loggedInUser }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/message_board")
      .then((r) => r.json())
      .then((messages) => setMessages(messages));
  }, []);

  function hanldeNewPostSubmit(post){
const updatedMessages = [...messages, post]
setMessages(updatedMessages)
  }

  return (
    <div id="message-board">
      <h2> Messages:</h2>
      <div id="messages-display">
        <MessagesList messages={messages} />
      </div>
      <div id="add-message">
        <PostMessage loggedIn={loggedIn} loggedInUser={loggedInUser} onNewPostSubmit={hanldeNewPostSubmit} />
      </div>
    </div>
  );
}

export default MessageBoard;
