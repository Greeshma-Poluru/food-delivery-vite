import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserAuth.css'; // ✅ Import CSS

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ id: Date.now(), name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registered successfully');
    navigate('/');
  };

  return (
    <div style={{backgroundColor: "#fff0f5",minHeight:"100vh"}}>
    <a href="/"><img src="/logo.png" alt="Logo" className="logo" /></a>
    <div className="user-auth-container">
      <h2>User Register</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="User Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="User Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
    </div>
  );
};

export default Register;
