import React, { useState } from "react";

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
        onNewPostSubmit(post)
        setPostInput({
          content: "",
          userId: loggedInUser.userId,
        });
      });
  }

  const postForm = (
    <form onSubmit={hanldeSubmit}>
      <h3>Post a message!</h3>
      <input
        type="text"
        required
        id="new-meesage-input"
        name="content"
        value={postInput.content}
        onChange={handleChange}
      />
      <input type="submit" required value="post" />
    </form>
  );

  const displayForm = loggedIn ? postForm : <h3> Please login to post!</h3>;

  return displayForm;
}

export default PostMessage;
