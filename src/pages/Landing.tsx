// src/pages/Landing.tsx
import React, { useState } from 'react';
import AdminLogin from './Admin/AdminLogin';
import UserLogin from './User/UserLogin';
import './Landing.css';

const Landing = () => {
  const [tab, setTab] = useState<'admin' | 'user' | null>(null);

  return (
    <div className="landing-container">
      <div className="logo-section">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1 className="company-name">FoodCourt</h1>
      </div>

      <h2 className="welcome-msg">Welcome to FoodCourt</h2>

      <div className="tab-buttons">
        <button onClick={() => setTab('admin')}>Admin Login</button>
        <button onClick={() => setTab('user')}>User Login</button>
      </div>

      <div className="login-form-container">
        {tab === 'admin' && <AdminLogin />}
        {tab === 'user' && <UserLogin />}
      </div>
    </div>
  );
};

export default Landing;
