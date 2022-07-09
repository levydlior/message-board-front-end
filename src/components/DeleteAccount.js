import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Alert } from "@mui/material";

function DeleteAccount({ onCloseClick, onAccountDelete, userId }) {
  const history = useHistory();

  function handleDeleteClick() {
    fetch(`http://localhost:9292/user/delete/${userId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        history.push("/create-login");
        onAccountDelete();
      });
  }
  return (
    <div id="delete-account">
      <div id="delet-exit"></div>
      <Alert severity="info">Are you sure you want to delete your account?</Alert>
      <div id="delete-account-buttons-div">
        <Button variant="outlined" size="small" onClick={handleDeleteClick}>
          Delete My Account!
        </Button>
        <Button variant="outlined" size="small" onClick={() => onCloseClick()}>
          No
        </Button>
      </div>
    </div>
  );
}

export default DeleteAccount;
