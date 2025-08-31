import React from 'react';
import './OverviewPage.css';

const OverviewPage = () => {
  return (
    <div className="overview-page">
      <div className="overview-header">
        <h1 className="overview-title">Superannuation Overview</h1>
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
      
      <div className="overview-content">
        <div className="overview-grid">
          {/* Total Super Balance Card - Top Right */}
          <div className="overview-card balance-card">
            <div className="balance-header">
              <div className="balance-date">As at 31 August 2025</div>
              <div className="balance-year">2025-2026</div>
            </div>
            <div className="balance-content">
              <h2 className="balance-title">Total Super Balance</h2>
              <div className="balance-amount">$240,000</div>
            </div>
          </div>

          {/* Annual Contributions Card */}
          <div className="overview-card contributions-card">
            <div className="card-header">
              <h2 className="card-title">Annual Contributions</h2>
              <p className="card-description">A summary of your superannuation contributions for the financial year.</p>
            </div>
            <div className="card-content">
              <div className="contribution-sources">
                <div className="contribution-source">
                  <div className="source-icon employer-icon">📋</div>
                  <div className="source-details">
                    <div className="source-name">Employer Contributions</div>
                    <div className="source-category">Superannuation Guarantee</div>
                  </div>
                  <div className="source-amount">$13,500</div>
                </div>
                
                <div className="contribution-source">
                  <div className="source-icon personal-icon">💵</div>
                  <div className="source-details">
                    <div className="source-name">Personal Contributions</div>
                    <div className="source-category">Voluntary contributions</div>
                  </div>
                  <div className="source-amount personal-amount">$7,000</div>
                </div>
              </div>
              
              <div className="total-contributions">
                <span className="total-label">Total Contributions this Year:</span>
                <span className="total-amount">$20,500</span>
              </div>
            </div>
          </div>

          {/* Contribution Caps Card */}
          <div className="overview-card caps-card">
            <div className="card-header">
              <h2 className="card-title">Contribution Caps</h2>
            </div>
            <div className="card-content">
              <p className="caps-description">
                You are below the annual contribution caps for the 2025-2026 financial year.
                Average superannuation balance for your age range is $350,000. 
                Consider additional contributions for to bolster your balance and reduce taxes.
              </p>
              <button className="explore-button">
                Explore Contribution Strategies →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
