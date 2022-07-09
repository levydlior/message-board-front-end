import React from "react";
import { useHistory } from "react-router-dom";

function DeleteAccount({ onCloseClick, onAccountDelete, userId }) {
  const history = useHistory()

  function handleDeleteClick() {
    fetch(`http://localhost:9292/user/delete/${userId}`, {
      method: "DELETE",
    }).then(r => r.json())
      .then(()=> {
        history.push("/create-login")
        onAccountDelete()})

    
  }
  return (
    <div id="delete-account">
      <div id="delet-exit"></div>
      <h2>Are you sure you want to delete your account?</h2>
      <div>
        <button onClick={handleDeleteClick}>Delete My Account!</button>
        <button onClick={() => onCloseClick()}>No</button>
      </div>
    </div>
  );
}

export default DeleteAccount;
