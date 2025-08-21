import React, { useState, useEffect } from 'react';
import './ProductPopup.css';

const ProductPopup = ({ product, onClose }) => {
  // Fallbacks for missing data
  const images = product.images || [product.image];
  const colors = product.colors || ['Default'];
  const description = product.description || 'Lovingly handcrafted to bring joy and comfort.';
  const suggestions = product.suggestions || [];

  // State
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedQty, setSelectedQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  // Reset state when product changes
  useEffect(() => {
    setSelectedImage(images[0]);
    setSelectedColor(colors[0]);
    setSelectedQty(1);
    setWishlisted(false);
  }, [product]);

  // Handlers
  const addToCart = () => {
    console.log(`Added to cart: ${product.id}, Qty: ${selectedQty}, Color: ${selectedColor}`);
  };

  const toggleWishlist = () => {
    setWishlisted(!wishlisted);
    console.log(`Wishlisted: ${product.id}`);
  };

  const handleSuggestionClick = (suggestion) => {
    console.log(`Open popup for: ${suggestion.title}`);
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>

        <div className="popup-content">
          {/* Images */}
          <div className="image-section">
            <img src={selectedImage} alt="Main" className="main-image" />
            <div className="thumbnail-row">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumb ${idx}`}
                  className={`thumbnail ${selectedImage === img ? 'active-thumb' : ''}`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="info-section">
            <h2 className="product-title">{product.name}</h2>
            <p className="product-description">{description}</p>

            {/* Color */}
            <label className="label">Colour</label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="dropdown"
            >
              {colors.map((color, idx) => (
                <option key={idx} value={color}>{color}</option>
              ))}
            </select>

            {/* Quantity */}
            <label className="label">Quantity</label>
            <div className="quantity-selector">
              {[1, 2, 3, 4].map((qty) => (
                <button
                  key={qty}
                  className={`qty-button ${selectedQty === qty ? 'selected-qty' : ''}`}
                  onClick={() => setSelectedQty(qty)}
                >
                  {qty}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="action-buttons">
              <button className="cart-button" onClick={addToCart}>Add to Cart</button>
              <button className="buy-button" onClick={() => console.log('Buy Now')}>Buy It Now</button>
              <button className="wishlist-button" onClick={toggleWishlist}>
                {wishlisted ? '♥' : '♡'}
              </button>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="suggestions-section">
            <h3>You May Also Like</h3>
            <div className="suggestions-row">
              {suggestions.map((item) => (
                <div key={item.id} className="suggestion-card" onClick={() => handleSuggestionClick(item)}>
                  <img src={item.image} alt={item.title} className="suggestion-image" />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back */}
        <div className="back-button-container">
          <button className="back-button" onClick={onClose}>← Back to Explore</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;