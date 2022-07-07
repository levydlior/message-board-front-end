import React from "react";
import Message from "./Message";

function MessagesList({ messages, loggedInUser, onDeleteMessage, onEditSubmit }) {
  const displayMessages = messages.map((message) => (
    <Message
      message={message}
      key={message.id}
      loggedInUser={loggedInUser}
      onDeleteMessage={onDeleteMessage}
      onEditSubmit={onEditSubmit}
    />
  ));

  return <ul>{displayMessages}</ul>;
}

export default MessagesList;
