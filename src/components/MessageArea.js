import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const messages = [{ author: 'Gabs', text: 'Aff, Lucas' }, { author: 'Lucas', text: 'Hehehehe' }];

const MessageArea = () => (
  <div id="messageArea" className="messageArea">
    <MessageList messages={messages} />
    <MessageInput />
  </div>
);

export default MessageArea;
