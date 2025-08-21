import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this
import './Login.css';

const Login = ({ onClose, compact = false, redirect = true }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ✅ Initialize here

  const handleSubmit = () => {
    if (email && password) {
      localStorage.setItem('token', 'fakeToken123');
      localStorage.setItem('user', JSON.stringify({ name: 'Talona' }));

      if (redirect) {
        navigate('/user'); // ✅ Now this works
      }

      if (onClose) {
        onClose(); // ✅ Close modal if passed
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <section className={compact ? 'auth-compact' : 'auth-container'}>
      <div className="auth-box">
        <h2>{isSignUp ? '🌼 Create Account' : '🌸 Welcome Back'}</h2>
        <p className="auth-subtext">
          {isSignUp
            ? 'Join the cozy world of Talona!'
            : 'Log in to your warm corner of joy.'}
        </p>

        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-button" onClick={handleSubmit}>
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>

        <p className="auth-toggle">
          {isSignUp ? 'Already have an account?' : 'New here?'}
          <span onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? ' Log in' : ' Sign up'}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;