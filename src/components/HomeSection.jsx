import React from 'react';
import './HomeSection.css';

const HomeSection = () => (
  <section id="home" className="home-section">
    <div className="home-content">
      {/* Left: Text */}
      <div className="text-block">
        <h1 className="headline">Handcrafted with love by Talona</h1>
        <p className="intro-text">
          Softly handmade, lovingly woven treasures—crafted to bring warmth to your heart and home.
        </p>
        <button className="shop-button">Shop Now</button>
      </div>

      {/* Right: Image */}
      <div className="image-block">
        <img
          src="/images/doll.jpg"
          alt="Crocheted Doll"
          className="doll-image"
        />
      </div>
    </div>
  </section>
);

export default HomeSection;