import React from 'react'
import PostMessage from './PostMessage';
import MessagesList from './MessagesList';

function MessageBoard({messages}) {


  return (
    <div id="message-board">
    <h2> Messages:</h2>
    <div id="messages-display">
    <MessagesList messages={messages}/>
    </div>
    <div id="add-message">
    <PostMessage />
    </div>
  </div>
  )
}

export default MessageBoard