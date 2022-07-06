import React from "react";

function PostMessage({ loggedIn }) {
  const postForm = (
    <form>
      <h3>Post a message!</h3>
      <input type="text" required id="new-meesage-input" />
      <input type="submit" required value="post" />
    </form>
  );

  const displayForm = loggedIn ? postForm : <h3> Please login to post!</h3>;

  return displayForm;
}

export default PostMessage;
