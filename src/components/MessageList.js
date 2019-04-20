import React from 'react';
import { connect } from 'react-redux';

const MessageList = ({ messages }) => (
  <div id="messageList" className="messageList">
    <section>Messages</section>
    {messages.map((message) => {
      const fromMe = message.author === 'Lucas';
      const style = {
        textAlign: fromMe ? 'right' : 'left',
      };
      return (
        <div id="message" className="message" style={style} key={message.id}>
          <i>{message.author}</i>
:
          {message.text}
        </div>
      );
    })}
  </div>
);

const mapStateToProps = ({ messages }) => ({
  messages,
});

export default connect(mapStateToProps)(MessageList);
