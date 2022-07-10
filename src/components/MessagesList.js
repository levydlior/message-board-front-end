import React, { useEffect, useRef } from "react";
import Message from "./Message";

function MessagesList({
  messages,
  loggedInUser,
  onDeleteMessage,
  onEditSubmit,
}) {
  const displayMessages = messages.map((message) => (
    <Message
      message={message}
      key={message.id}
      loggedInUser={loggedInUser}
      onDeleteMessage={onDeleteMessage}
      onEditSubmit={onEditSubmit}
    />
  ));

  const bottomRef = useRef(null);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ul id="message-ul">
      {displayMessages}
      <div ref={bottomRef} />
    </ul>
  );
}

export default MessagesList;
