import React, { useState } from "react";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";

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

  function handleEditButtonClick(){
    setEditMode(!editMode) 
    setEditInputValue({content: message.content})
  }


  function icons() {
    return (
      <>
        <AiTwotoneEdit
          className="icons"
          onClick={handleEditButtonClick}
        />
        <AiTwotoneDelete className="icons" onClick={handleDelete} />
      </>
    );
  }

  function handleEditChange(e) {
    const target = e.target.name;
    const value = e.target.value;
    setEditInputValue({
      [target]: value,
    });
  }

  function handleEditSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:9292/message/update/${message.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(editInputValue)
    }).then(r => r.json())
      .then(updatedMessage => {
        setEditMode(false)
        onEditSubmit(updatedMessage)
      })
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
      <img
        className="message-profile-pic"
        src={message.avatar_url}
        alt="profile picture"
      />
      <h4>{message.user_name}</h4>
      {!editMode ? <p>{message.content}</p> : editForm}
      <p>{timestamp}</p>
      <div className="edit-delete-div">
        {loggedInUser.userId === message.user_id ? icons() : null}
      </div>
    </>
  );

  return <li className="message-box">{messageInfo}</li>;
}

export default Message;
