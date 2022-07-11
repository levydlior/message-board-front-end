import React, { useState } from "react";
import {Button, TextField } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

function PostMessage({ loggedIn, loggedInUser, onNewPostSubmit }) {
  const [postInput, setPostInput] = useState({
    content: "",
    userId: loggedInUser.userId,
  });

  function handleChange(e) {
    const target = e.target.name;
    const value = e.target.value;
    setPostInput({ ...postInput, [target]: value });
  }

  function hanldeSubmit(e) {
    e.preventDefault();
    console.log(postInput);
    fetch("http://localhost:9292/message/post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(postInput),
    })
      .then((r) => r.json())
      .then((post) => {
        onNewPostSubmit(post);
        setPostInput({
          content: "",
          userId: loggedInUser.userId,
        });
      });
  }

  const postForm = (
    <form onSubmit={hanldeSubmit}>
      <h3 style={{ margin: "1rem" }}> Post a message!</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{ width: 500}}
          multiline={true}
          id="outlined-basic"
          variant="outlined"
          required
          name="content"
          value={postInput.content}
          onChange={handleChange}
          size="small"
        />
        <Button
          style={{ marginLeft: "2rem", color: 'yellow', borderColor: 'black' }}
          type="submit"
          value="post"
          variant="outlined"
        >
          <SendRoundedIcon sx={{color: 'black'}}/>{" "}
        </Button>
      </div>
    </form>
  );

  const displayForm = loggedIn ? postForm : <h3> Please login to post!</h3>;

  return displayForm;
}

export default PostMessage;
