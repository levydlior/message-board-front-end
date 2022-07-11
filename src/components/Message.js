import React, { useState } from "react";
import { Avatar } from "@mui/material";

import { AiTwotoneEdit, AiTwotoneDelete, AiOutlineClose } from "react-icons/ai";

function Message({ message, loggedInUser, onDeleteMessage, onEditSubmit }) {
  const [editMode, setEditMode] = useState(false);
  const [editInputValue, setEditInputValue] = useState({
    content: message.content,
  });
  function handleDelete() {
    fetch(`http://localhost:9292//message/delete/${message.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedMessage) => onDeleteMessage(deletedMessage));
  }
  const timestamp = new Date(message.created_at).toLocaleTimeString();

  function handleEditButtonClick() {
    setEditMode(!editMode);
    setEditInputValue({ content: message.content });
  }

  function icons() {
    return (
      <div className="icons-div">
        {!editMode ? (
          <AiTwotoneEdit className="icons" onClick={handleEditButtonClick} />
        ) : (
          <AiOutlineClose className="icons" onClick={handleEditButtonClick} />
        )}
        <AiTwotoneDelete className="icons" onClick={handleDelete} />
      </div>
    );
  }

  function handleEditChange(e) {
    const target = e.target.name;
    const value = e.target.value;
    setEditInputValue({
      [target]: value,
    });
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/message/update/${message.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(editInputValue),
    })
      .then((r) => r.json())
      .then((updatedMessage) => {
        setEditMode(false);
        onEditSubmit(updatedMessage);
      });
  }

  const editForm = (
    <form onSubmit={handleEditSubmit}>
      <input
        name="content"
        type="text"
        value={editInputValue.content}
        onChange={handleEditChange}
      />
      <input type="submit" />
    </form>
  );

  const messageInfo = (
    <>
      <div id="avatar-userName">
        <Avatar
          className="message-profile-pic"
          src={message.avatar_url}
          alt="profile picture"
          sx={{ width: 56, height: 56 }}
        />
        <h4 style={{ margin: "0.5rem" }}>{message.user_name}</h4>
        <p className="time">-{timestamp}</p>
        {loggedInUser.userId === message.user_id ? icons() : null}
      </div>
      <div className="edit-delete-div">
        {!editMode ? (
          <p style={{ marginLeft: "4rem" }}>{message.content}</p>
        ) : (
          editForm
        )}
      </div>
    </>
  );

  return <li className="message-box">{messageInfo}</li>;
}

export default Message;
