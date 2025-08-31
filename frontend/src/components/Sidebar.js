import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeTab, onTabChange }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon">
          <div className="triangle"></div>
          <div className="arrow"></div>
        </div>
        <span className="logo-text">ThinkTax</span>
      </div>
      
      <nav className="nav-menu">
        <div 
          className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => onTabChange('overview')}
        >
          <div className="nav-icon">⏰</div>
          <span>Overview</span>
        </div>
        <div 
          className={`nav-item ${activeTab === 'chat' ? 'active' : ''}`}
          onClick={() => onTabChange('chat')}
        >
          <div className="nav-icon chat-icon">💬</div>
          <span>Chat</span>
        </div>
        <div 
          className={`nav-item ${activeTab === 'calendar' ? 'active' : ''}`}
          onClick={() => onTabChange('calendar')}
        >
          <div className="nav-icon">📅</div>
          <span>Tax Calendar</span>
        </div>
        <div 
          className={`nav-item ${activeTab === 'activity' ? 'active' : ''}`}
          onClick={() => onTabChange('activity')}
        >
          <div className="nav-icon">📊</div>
          <span>Activity</span>
        </div>
        <div 
          className={`nav-item ${activeTab === 'documents' ? 'active' : ''}`}
          onClick={() => onTabChange('documents')}
        >
          <div className="nav-icon">📄</div>
          <span>Documents</span>
        </div>
      </nav>
      
      <div className="logout">
        <div className="nav-icon">↪️</div>
        <span>Log out</span>
      </div>
    </div>
  );
};

export default Sidebar;
