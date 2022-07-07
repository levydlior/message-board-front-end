import React from "react";
import Message from "./Message";

function MessagesList({ messages, loggedInUser, onDeleteMessage }) {
  const displayMessages = messages.map((message) => (
    <Message
      message={message}
      key={message.id}
      loggedInUser={loggedInUser}
      onDeleteMessage={onDeleteMessage}
    />
  ));

  return <ul>{displayMessages}</ul>;
}

export default MessagesList;
