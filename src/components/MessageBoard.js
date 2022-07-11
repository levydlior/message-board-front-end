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

  function handleMessageDelete(deletedMessage) {
    const updatedMessages = messages.filter(
      (message) => message.id !== deletedMessage.id
    );
    setMessages(updatedMessages);
  }

  function hanldeNewPostSubmit(post) {
    const updatedMessages = [...messages, post];
    setMessages(updatedMessages);
  }

  function handleEditSubmit(updatedMessage) {
    const updatesMessages = messages.map((message) => {
      if (updatedMessage.id === message.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });

    setMessages(updatesMessages);
  }

  return (
    <div id="message-board">
      <div className="section-title-div">
      <h2 className="content-title"> Messages:</h2>
      </div>
      <div id="messages-display">
        <MessagesList
          messages={messages}
          loggedInUser={loggedInUser}
          onDeleteMessage={handleMessageDelete}
          onEditSubmit={handleEditSubmit}
        />
      </div>
      <div id="add-message">
        <PostMessage
          loggedIn={loggedIn}
          loggedInUser={loggedInUser}
          onNewPostSubmit={hanldeNewPostSubmit}
        />
      </div>
    </div>
  );
}

export default MessageBoard;
