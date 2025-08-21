import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import LoginModal from './LoginModal'; // Import your modal component

const Header = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Smooth scroll to section
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle profile icon click
  const handleProfileClick = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/user'); // User is logged in, go to profile
    } else {
      setShowLoginModal(true); // Not logged in, show login modal
    }
  };

  return (
    <>
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
        <div className="profile-icon" onClick={handleProfileClick}>
          <img
            src="/images/profilepic.png"
            alt="Profile"
            style={{ width: '40px', height: '40px', borderRadius: '50%' }}
          />
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  );
};

export default Header;