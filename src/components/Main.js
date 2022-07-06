import React from "react";
import MessageBoard from "./MessageBoard";

function Main({ messages }) {
  return (
    <main id="main">
      <MessageBoard messages={messages} />
    </main>
  );
}

export default Main;
