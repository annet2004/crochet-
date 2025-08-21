import React, { useState } from 'react';
import './ContactSection.css';

const productImages = [
  '/images/doll.jpg',
  '/images/heart.jpg',
  '/images/doll.jpg',
  '/images/heart.jpg',
];

export default function ContactSection() {
  const [message, setMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      console.log('Message sent to admin:', message);
      setMessage('');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>

      <div className="enquiry-box">
        <textarea
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
        />
        <button onClick={handleSend}>Send</button>
      </div>

      {showToast && <div className="toast">🌷 Message sent with love!</div>}

      <div className="social-links">
        <a href="" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="" target="_blank" rel="noopener noreferrer">Pinterest</a>
      </div>

      <div className="product-gallery">
        {productImages.map((src, index) => (
          <img key={index} src={src} alt={`Product ${index + 1}`} />
        ))}
      </div>

      {/* Footer Box */}
      <div className="footer-box">
        <div className="footer-content">
          <h3>Talona</h3>
          <p>Crafting comfort through design.</p>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-contact">
            <p>Email: hello@talona.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>

          <div className="copyright">
            © {new Date().getFullYear()} Talona. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}