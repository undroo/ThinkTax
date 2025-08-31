import React, { useEffect, useRef } from 'react';
import './ChatMessages.css';

const ChatMessages = ({ messages, isAdvisorTyping }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isAdvisorTyping]);

  return (
    <div className="chat-messages">
      {messages.map((message) => (
        <div key={message.id} className={`message ${message.sender}`}>
          <div className="message-avatar">{message.avatar}</div>
          <div className="message-bubble">
            {message.text}
          </div>
        </div>
      ))}
      
      {/* Show typing indicator when advisor is typing */}
      {isAdvisorTyping && (
        <div className="message advisor typing-indicator">
          <div className="message-avatar">👨‍💼</div>
          <div className="message-bubble typing-bubble">
            <div className="typing-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
