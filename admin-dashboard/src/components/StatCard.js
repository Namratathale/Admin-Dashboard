import React from 'react';

const StatCard = ({ icon, title, value }) => {
  return (
    <div className="stat-card">
      <div className="stat-card-icon">
        <i className={icon}></i>
      </div>
      <div className="stat-card-info">
        <h3 className="stat-card-title">{title}</h3>
        <p className="stat-card-value">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;

