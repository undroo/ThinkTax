import React from 'react';
import './ActivityPage.css';

const ActivityPage = () => {
  return (
    <div className="activity-page">
      <div className="activity-header">
        <h1 className="activity-title">Your Financial Activity</h1>
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
      
      <div className="activity-content">
        {/* Expected Income Card */}
        <div className="activity-card income-card">
          <div className="card-header">
            <h2 className="card-title">Expected Income by 30 June</h2>
          </div>
          <div className="card-content">
            <div className="income-amount">$105,000</div>
            <div className="income-period">Financial Year: 2025-2026</div>
          </div>
        </div>

        {/* Income Breakdown Card */}
        <div className="activity-card breakdown-card">
          <div className="card-header">
            <h2 className="card-title">Income Breakdown</h2>
            <p className="card-description">Here is a summary of your income sources so far.</p>
          </div>
          <div className="card-content">
            <div className="income-sources">
              <div className="income-source">
                <div className="source-icon salary-icon">💰</div>
                <div className="source-details">
                  <div className="source-name">Salary</div>
                  <div className="source-category">Primary Employment</div>
                </div>
                <div className="source-amount salary-amount">$85,000</div>
              </div>
              
              <div className="income-source">
                <div className="source-icon stock-icon">💹</div>
                <div className="source-details">
                  <div className="source-name">Stock Sale</div>
                  <div className="source-category">Capital Gains</div>
                </div>
                <div className="source-amount stock-amount">$15,000</div>
              </div>
              
              <div className="income-source">
                <div className="source-icon freelance-icon">📄</div>
                <div className="source-details">
                  <div className="source-name">Freelance Work</div>
                  <div className="source-category">Side Income</div>
                </div>
                <div className="source-amount freelance-amount">$5,000</div>
              </div>
            </div>
            
            <div className="total-income">
              <span className="total-label">Total Income to Date:</span>
              <span className="total-amount">$105,000</span>
            </div>
          </div>
        </div>

        {/* Potential Tax Liability Card */}
        <div className="activity-card liability-card">
          <div className="card-header">
            <h2 className="card-title">Potential Tax Liability</h2>
          </div>
          <div className="card-content">
            <p className="liability-description">
              Based on your current income, you may be privy to the Medicare Levy Surcharge. 
              We recommend reviewing your income and visiting the ATO website to check your eligibility.
            </p>
            <button className="advisor-button">
              Link to ATO Page →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
