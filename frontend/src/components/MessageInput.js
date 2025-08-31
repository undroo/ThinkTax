import React, { useState, useRef } from 'react';
import './MessageInput.css';

const MessageInput = ({ onAddMessage }) => {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() && !isSending) {
      setIsSending(true);
      
      // Simulate a brief delay for better UX
      await new Promise(resolve => setTimeout(resolve, 100));
      
      onAddMessage(message.trim());
      setMessage('');
      setIsSending(false);
      
      // Reset textarea height
      if (inputRef.current) {
        inputRef.current.style.height = 'auto';
      }
      
      // Focus the input for the next message - use setTimeout to ensure it happens after state updates
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleInput = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  };

  return (
    <div className="message-input-container">
      <form onSubmit={handleSubmit} className="message-input-form">
        <textarea
          ref={inputRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Type your message... (Enter to send, Shift+Enter for new line)"
          className="message-input"
          disabled={isSending}
          rows={1}
          style={{ resize: 'none', overflow: 'hidden' }}
        />
        <button 
          type="submit" 
          className={`send-button ${isSending ? 'sending' : ''}`}
          disabled={isSending || !message.trim()}
        >
          {isSending ? '⏳' : '✈️'}
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
