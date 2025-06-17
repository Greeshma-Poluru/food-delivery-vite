import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './UserAuth.css'; // ✅ Import CSS

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find((u: any) => u.email === email && u.password === password);
    if (found) {
      localStorage.setItem('userLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(found));
      navigate('/user/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="user-auth-container">
      <h2>User Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don’t have an account? <Link to="/user/register">Register Here</Link>
      </p>
    </div>
  );
};

export default UserLogin;
