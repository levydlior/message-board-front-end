import React from "react";
import Message from "./Message";

function MessagesList({ messages }) {
  const displayMessages = messages.map((message) => (
    <Message message={message} key={message.id} />
  ));

  return <ul>{displayMessages}</ul>;
}

export default MessagesList;
