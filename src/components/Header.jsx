import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const navigate = useNavigate();

  return (
    <header className="talona-header">
      {/* Left: Logo */}
      <div className="logo">TALONA</div>

      {/* Center: Navigation */}
      <nav className="nav-links">
        <ul>
          <li onClick={() => scrollTo('home')}>Home</li>
          <li onClick={() => scrollTo('products')}>Products</li>
          <li onClick={() => scrollTo('contact')}>Contact</li>
        </ul>
      </nav>

      {/* Right: Profile Icon */}
    <div className="profile-icon" onClick={() => navigate('/user')}>
  <img
    src="/images/profilepic.png"
    alt="Profile"
    style={{ width: '40px', height: '40px', borderRadius: '50%' }}
  />
</div>
    </header>
  );
};

export default Header;