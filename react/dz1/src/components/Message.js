import React from 'react';
import './Message.css'; 

function Message(props) {
  return (
    <div className="message">
      {props.text}
    </div>
  );
}

export default Message;