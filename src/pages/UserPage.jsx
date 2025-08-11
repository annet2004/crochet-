import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
  const navigate = useNavigate();

  return (
    <section className="section">
      <h2>User Profile</h2>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div className="card" style={{ width: '300px' }}>
          <h3>Cart</h3>
          <p>No items yet.</p>
        </div>
        <div className="card" style={{ width: '300px' }}>
          <h3>Wishlist</h3>
          <p>Your favorite items will appear here.</p>
        </div>
      </div>

      {/* Back to Home Button */}
      <button
        onClick={() => navigate('/')}
        style={{
          marginTop: '2rem',
          padding: '0.6rem 1.2rem',
          backgroundColor: '#F7DAEF',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          color: '#7A4E76'
        }}
      >
        ⬅ Back to Home
      </button>
    </section>
  );
};

export default UserPage;