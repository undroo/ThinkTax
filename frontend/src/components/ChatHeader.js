import React from 'react';
import './ChatHeader.css';

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <h1 className="chat-title">Chat with ThinkTax</h1>
      <div className="header-actions">
        <div className="notification-bell">
          🔔
          <div className="notification-dot"></div>
        </div>
        <div className="user-profile">
          👤
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
