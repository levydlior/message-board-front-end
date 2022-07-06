import React from 'react'
import PostMessage from './PostMessage';
import MessagesList from './MessagesList';

function MessageBoard({messages, loggedIn}) {


  return (
    <div id="message-board">
    <h2> Messages:</h2>
    <div id="messages-display">
    <MessagesList messages={messages}/>
    </div>
    <div id="add-message">
    <PostMessage loggedIn={loggedIn} />
    </div>
  </div>
  )
}

export default MessageBoard