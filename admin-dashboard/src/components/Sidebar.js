import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'users', icon: 'fa-solid fa-users', label: 'Users' },
        { id: 'overview', icon: 'fa-solid fa-chart-pie', label: 'Overview' },

    { id: 'coupons', icon: 'fa-solid fa-ticket', label: 'Coupons' },
  ];

  return (
    <div className="sidebar">
        <div className="sidebar-header">
                <img src='https://res.cloudinary.com/dfkyivvyj/image/upload/v1757760973/Screenshot_2025-09-13_162410_gpzggm.png' height='60px' width='60px' />
                <h1>GenAI Club</h1>
</div>
<hr color='#999999ff' width='230px'></hr>
      <div className="sidebar-header">
        <i className="fa-solid fa-shield-halved"></i>
        <h1>Admin Panel</h1>
      </div>
      <nav className="sidebar-nav">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`nav-button ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
