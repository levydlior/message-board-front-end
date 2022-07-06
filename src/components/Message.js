import React from "react";

function Message({ message }) {
  const timestamp = new Date(message.created_at).toLocaleTimeString();
  return (
    <li className="message-box">
      <img
        className="message-profile-pic"
        src={message.avatar_url}
        alt="profile picture"
      />
      <h4>{message.user_name}</h4>
      <p>{message.content}</p>
      <p>{timestamp}</p>
    </li>
  );
}

export default Message;
