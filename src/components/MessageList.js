import React from 'react';

const MessageList = ({ messages = [] }) => (
  <div id="messageList" className="messageList">
    <section>Messages</section>
    {messages.map((message) => {
      const fromMe = message.author === 'Lucas';
      const style = {
        textAlign: fromMe ? 'right' : 'left',
      };
      return (
        <div id="message" className="message" style={style}>
          <i>{message.author}</i>
:
          {message.text}
        </div>
      );
    })}
  </div>
);

export default MessageList;
