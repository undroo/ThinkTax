import React, { useState } from 'react';
import './CalendarPage.css';

const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState(8); // August
  const [currentYear, setCurrentYear] = useState(2025);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month - 1, 1).getDay();
  };

  const renderCalendar = (month, year) => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isCurrentDate = day === 30 && month === 8; // Highlight August 30th
      days.push(
        <div 
          key={day} 
          className={`calendar-day ${isCurrentDate ? 'current-date' : ''}`}
        >
          {day}
        </div>
      );
    }

    return (
      <div className="calendar">
        <div className="calendar-header">
          <button className="nav-arrow" onClick={() => handleMonthChange(month - 1, year)}>
            &lt;
          </button>
          <h3 className="month-title">{monthNames[month - 1]} {year}</h3>
          <button className="nav-arrow" onClick={() => handleMonthChange(month + 1, year)}>
            &gt;
          </button>
        </div>
        
        <div className="calendar-weekdays">
          <div className="weekday">Su</div>
          <div className="weekday">Mo</div>
          <div className="weekday">Tu</div>
          <div className="weekday">We</div>
          <div className="weekday">Th</div>
          <div className="weekday">Fr</div>
          <div className="weekday">Sa</div>
        </div>
        
        <div className="calendar-grid">
          {days}
        </div>
      </div>
    );
  };

  const handleMonthChange = (newMonth, year) => {
    if (newMonth < 1) {
      setCurrentMonth(12);
      setCurrentYear(year - 1);
    } else if (newMonth > 12) {
      setCurrentMonth(1);
      setCurrentYear(year + 1);
    } else {
      setCurrentMonth(newMonth);
    }
  };

  const upcomingDeadlines = [
    {
      id: 1,
      icon: '📄',
      title: 'FY25 Tax Statement Due',
      date: 'October 30, 2025',
      color: '#3b82f6'
    },
    {
      id: 2,
      icon: '🎓',
      title: 'FY26 HELP Indexation',
      date: 'June 1, 2026',
      color: '#3b82f6'
    },
    {
      id: 3,
      icon: '📅',
      title: 'FY26 End of Financial Year',
      date: 'June 30, 2026',
      color: '#3b82f6'
    }
  ];

  return (
    <div className="calendar-page">
      <div className="calendar-header-section">
        <h1 className="calendar-title">Tax Calendar</h1>
        <p className="calendar-subtitle">Here are your key upcoming tax dates.</p>
      </div>
      
      <div className="calendar-content">
        <div className="calendars-section">
          <div className="calendar-container">
            {renderCalendar(8, 2025)} {/* August 2025 */}
          </div>
          <div className="calendar-container">
            {renderCalendar(9, 2025)} {/* September 2025 */}
          </div>
        </div>
        
        <div className="deadlines-section">
          <h2 className="deadlines-title">Upcoming Deadlines</h2>
          <div className="deadlines-list">
            {upcomingDeadlines.map((deadline) => (
              <div key={deadline.id} className="deadline-card">
                <div 
                  className="deadline-icon"
                  style={{ backgroundColor: deadline.color }}
                >
                  {deadline.icon}
                </div>
                <div className="deadline-content">
                  <div className="deadline-title">{deadline.title}</div>
                  <div className="deadline-date">{deadline.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
