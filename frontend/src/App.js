import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import ActivityPage from './components/ActivityPage';
import OverviewPage from './components/OverviewPage';
import CalendarPage from './components/CalendarPage';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'advisor',
      text: "Hello! I've noticed your employer has not withheld sufficient tax for your expected income this year. Has there been any events happening this year that may affect your tax?",
      avatar: '👨‍💼'
    },
    {
      id: 2,
      sender: 'user',
      text: "Oh hi, I recently started a full-time job at work and I think I'm going to get a bonus this year too.",
      avatar: '👤'
    },
    {
      id: 3,
      sender: 'advisor',
      text: "That's great, just a heads-up, this mean you may required to start contributing towards your HELP debt.",
      avatar: '👨‍💼'
    }
  ]);

  // Predefined advisor responses that will be sent automatically
  const advisorResponses = [
    "Higher Education Loan Program (HELP) is a government program that offers eligible students a combination of a loan and a discount on their student contribution amounts, with the government paying course fees directly to the educational institution for Commonwealth Supported Places\nYou can see the repayment rates for your HELP debt on the ATO website or find the link here https://www.ato.gov.au/tax-rates-and-codes/study-and-training-support-loans-rates-and-repayment-thresholds ",
    "Based on your expected income of $70,000, you would be paying 15c on every dollar above $67,000, meaning you would contribute $450 this year towards your HELP debt. \nThis amount may vary as you mentioned you are expected to receive a bonus this year.",
    "For sure! Paying down your loan early can help reduce your tax liability and interest costs in the long run. The next indexation for HELP debt will be on the 1st of June 2026."
  ];

  const [nextAdvisorResponseIndex, setNextAdvisorResponseIndex] = useState(0);
  const [isAdvisorTyping, setIsAdvisorTyping] = useState(false);

  const addMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      sender: 'user',
      text: text,
      avatar: '👤'
    };
    
    setMessages(prevMessages => [...prevMessages, newMessage]);

    // Show typing indicator
    setIsAdvisorTyping(true);

    // Automatically send the next advisor response after a short delay
    setTimeout(() => {
      if (nextAdvisorResponseIndex < advisorResponses.length) {
        const advisorMessage = {
          id: Date.now() + 1,
          sender: 'advisor',
          text: advisorResponses[nextAdvisorResponseIndex],
          avatar: '👨‍💼'
        };
        
        setMessages(prevMessages => [...prevMessages, advisorMessage]);
        setNextAdvisorResponseIndex(prevIndex => prevIndex + 1);
        setIsAdvisorTyping(false);
      } else {
        // If we've used all responses, just hide typing indicator
        setIsAdvisorTyping(false);
      }
    }, 1500); // 1.5 second delay to simulate typing
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderMainContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewPage />;
      case 'chat':
        return <ChatArea 
          messages={messages} 
          onAddMessage={addMessage} 
          isAdvisorTyping={isAdvisorTyping}
        />;
      case 'activity':
        return <ActivityPage />;
      case 'calendar':
        return <CalendarPage />;
      case 'documents':
        return <div className="placeholder-page">Documents - Coming Soon</div>;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <div className="app">
      <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
      {renderMainContent()}
    </div>
  );
}

export default App;
