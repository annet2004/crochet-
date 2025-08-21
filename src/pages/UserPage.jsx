import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserPage.css';

const UserPage = () => {
  const navigate = useNavigate();

  return (
    <section className="user-section">
      <h2 className="user-heading">🌸 Your Profile</h2>

      <div className="user-info">
        <img
          src="/images/profilepic.png"
          alt="User Avatar"
          className="user-avatar"
         
        />
        <div className="user-details">
          <h3 className="user-name">Talona</h3>
          <p className="user-bio">
            Crafting joy, one stitch at a time. Welcome to your cozy corner!
          </p>
        </div>
      </div>

      <div className="user-panels">
        <div className="card">
          <h3>🛒 Cart</h3>
          <p>No items yet.</p>
        </div>
        <div className="card">
          <h3>💖 Wishlist</h3>
          <p>Your favorite items will appear here.</p>
        </div>
      </div>

      <button
        onClick={() => navigate('/')}
        className="back-button"
      >
        ⬅ Back to Home
      </button>
    </section>
  );
};

export default UserPage;