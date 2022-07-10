import React, { useEffect, useState } from "react";
import { AiTwotoneEdit, AiOutlineClose } from "react-icons/ai";
import DeleteAccount from "./DeleteAccount";
import { Button, Avatar, TextField } from "@mui/material";

function MyProfile({ userId, onAccountDelete }) {
  const [user, setUser] = useState({});
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [editMode, setEditMode] = useState("");
  const [editForm, setEditForm] = useState({
    avatar_url: "",
  });

  useEffect(() => {
    fetch(`http://localhost:9292/user/${userId}`)
      .then((r) => r.json())
      .then((user) => {
        setUser(user);
      });
  }, []);

  function handleChange(e) {
    const target = e.target.name;
    const value = e.target.value;

    setEditForm({ ...editForm, [target]: value });
  }

  function handleAvatarSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/user/update/avatar/${userId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        avatar_url: editForm.avatar_url,
      }),
    })
      .then((r) => r.json())
      .then((updatedAvatar) => {
        setEditMode("");
        setUser({ ...user, avatar_url: updatedAvatar.avatar_url });
      });
  }

  const imageEditForm = (
    <form onSubmit={handleAvatarSubmit} id="edit-avatar-form">
       <TextField
          label="Edit Avatar Img"
          name="avatar_url"
          type="text"
          required
          value={editForm.avatar_url}
          onChange={handleChange}
          style={{ marginInline: "1rem" }}
          sx={{ outlineColor: "black" }}
          size="small"
        />
        <Button
              style={{
                color: "black",
                borderColor: "black",
              }}
              type="submit"
             
              variant="outlined"
            >
              Confirm Change
            </Button>
    </form>
  );

  const editIcons =
    editMode !== "avatarEdit" ? (
      <AiTwotoneEdit
        className="icons"
        id="edit-profile-avatar"
        onClick={() => {
          setEditForm({ ...editForm, avatar_url: "" });
          setEditMode("avatarEdit");
        }}
      />
    ) : (
      <AiOutlineClose
        className="icons"
        id="edit-profile-avatar"
        onClick={() => {
          setEditMode("");
          setEditForm({ ...editForm, avatar_url: "" });
        }}
      />
    );

  return (
    <div id="profile-section">
      <div className="section-title-div">
        <h2 className="content-title">My Profile</h2>
      </div>
      <div id="icons-div"> {editIcons}</div>
      <div>
        <Avatar
          sx={{ height: 150 }}
          src={user.avatar_url}
          alt="profile avatar"
          id="profile-img"
        />
      </div>
      {editMode === "avatarEdit" ? imageEditForm : null}
      <div id="user-details">
        <h3>{user.user_name}</h3>
      </div>
      {!deleteAccount ? null : (
        <DeleteAccount
          userId={userId}
          onAccountDelete={onAccountDelete}
          onCloseClick={() => setDeleteAccount(false)}
        />
      )}
      {deleteAccount ? null : (
        <Button
          variant="outlined"
          sx={{ borderColor: "black", color: "black" }}
          onClick={() => setDeleteAccount(true)}
        >
          Delete account
        </Button>
      )}
    </div>
  );
}

export default MyProfile;
