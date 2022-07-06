import React from "react";

function PostMessage() {
  return (
    <form>
      <h3>Post a message!</h3>
      <input type="text" required id="new-meesage-input" />
      <input type="submit" required value="post" />
    </form>
  );
}

export default PostMessage;
