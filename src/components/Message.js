import React from "react";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";

function Message({ message, loggedInUser }) {
  function icons() {
    return (
      <>
        <AiTwotoneEdit className="icons" />
        <AiTwotoneDelete className="icons" />
      </>
    );
  }

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
      <div className="edit-delete-div">
        {loggedInUser.userId === message.user_id ? icons() : null}
      </div>
    </li>
  );
}

export default Message;
