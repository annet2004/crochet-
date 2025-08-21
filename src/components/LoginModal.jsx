import React from 'react';
import './LoginModal.css';
import Login from './Login'; // ✅ Correct path

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <Login compact onClose={onClose} redirect={false} />
      </div>
    </div>
  );
};

export default LoginModal;