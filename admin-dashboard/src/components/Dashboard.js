import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Users from './tabs/Users';
import Overview from './tabs/Overview';
import Coupons from './tabs/Coupons';
import AnimatedBackground from './AnimatedBackground';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api/students';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        // We use the API_URL constant here
        const response = await axios.get(API_URL);
        setStudents(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch data. Is the admin server running?');
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const renderTabContent = () => {
    if (loading) return <div className="loading-container">Loading Data...</div>;
    if (error) return <div className="error-container">{error}</div>;

    switch (activeTab) {
      case 'coupons':
        return <Coupons students={students} />;
      case 'users':
        return <Users students={students} />;
      case 'overview':
      default:
        return <Overview students={students} />;
    }
  };

  return (
    <>
      <AnimatedBackground />
      <div className="dashboard-layout">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="main-content">
           <header className="main-header">
               <h1>Welcome Back, Admin</h1>
               <p>Here's what's happening with your project today.</p>
           </header>
          {renderTabContent()}
        </main>
      </div>
    </>
  );
};

export default Dashboard;

