import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function DeleteAccount({onCloseClick}) {
  return (
    <form id="delete-account">
        <div id="delet-exit">
      <AiOutlineClose className="icons" onClick={() => onCloseClick()} />
      </div>
      <h2>Are you sure you want to delete your account?</h2>
      <div>
        <input type="submit" value="Delete My Account!" />
      </div>
    </form>
  );
}

export default DeleteAccount;
