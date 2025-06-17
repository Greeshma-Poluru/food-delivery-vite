import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

interface Props {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const UserNavbar: React.FC<Props> = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <h2>🍽️ FoodCourt</h2>
      <div>
        <Link to="/user/home" className="nav-link">🏠 Home</Link>
        <Link to="/user/cart" className="nav-link">🛒 Cart</Link>
        <Link to="/user/orders" className="nav-link">📦 My Orders</Link>
        <button className="logout-btn" onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default UserNavbar;
