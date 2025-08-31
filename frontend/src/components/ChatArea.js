import React from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import MessageInput from './MessageInput';
import './ChatArea.css';

const ChatArea = ({ messages, onAddMessage, isAdvisorTyping }) => {
  return (
    <div className="chat-area">
      <ChatHeader />
      <ChatMessages messages={messages} isAdvisorTyping={isAdvisorTyping} />
      <MessageInput onAddMessage={onAddMessage} />
    </div>
  );
};

export default ChatArea;
