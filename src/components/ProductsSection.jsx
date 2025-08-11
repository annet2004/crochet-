import React, { useState } from 'react';
import './ProductsSection.css';

const products = [
  { id: 1, name: 'Crochet Flower Coaster', price: '$16.00', image: '/images/babycarrot.jpg' },
  { id: 2, name: 'Cozy Bunny Plushie', price: '$32.00', image: '/images/heart.jpg' },
  { id: 3, name: 'Pastel Pouch', price: '$22.00', image: '/images/penguin.jpg' },
  { id: 4, name: 'Mini Bear Keychain', price: '$12.00', image: '/images/babycarrot.jpg' },
  { id: 5, name: 'Woven Wall Charm', price: '$28.00', image: '/images/heart.jpg' },
  { id: 6, name: 'Snuggle Cat Plushie', price: '$34.00', image: '/images/heart.jpg' },
];

export default function ProductsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [liked, setLiked] = useState(Array(products.length).fill(false));
  const visibleCount = 3;
  const maxStartIndex = products.length - visibleCount;

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + visibleCount, maxStartIndex));
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const toggleLike = (index) => {
    const updated = [...liked];
    updated[index] = !updated[index];
    setLiked(updated);
  };

  const visibleProducts = products.slice(startIndex, startIndex + visibleCount);

  return (
    <section id="products" className="products-section">
      <h2>Our Products</h2>
      <div className="carousel">
        {startIndex > 0 && (
          <button className="arrow left" onClick={handlePrev}>‹</button>
        )}

        <div className="product-cards">
          {visibleProducts.map((product, i) => {
            const globalIndex = startIndex + i;
            return (
              <div key={product.id} className="card">
                <img src={product.image} alt={product.name} />
                <div className="info">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
                <button
                  className={`wishlist ${liked[globalIndex] ? 'liked' : ''}`}
                  onClick={() => toggleLike(globalIndex)}
                >
                  {liked[globalIndex] ? '♥' : '♡'}
                </button>
              </div>
            );
          })}
        </div>

        {startIndex < maxStartIndex && (
          <button className="arrow right" onClick={handleNext}>›</button>
        )}
      </div>
    </section>
  );
}