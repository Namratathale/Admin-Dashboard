import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  // We removed the AnimatedBackground from here since it's now inside Dashboard
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;

