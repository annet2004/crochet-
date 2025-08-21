import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import UserPage from './pages/UserPage';
import ProductPopup from './components/ProductPopup';
import './styles/global.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeSection />
                <ProductsSection onProductClick={handleProductClick} />
                <ContactSection />
              </>
            }
          />
          <Route path="/user" element={<UserPage />} />
        </Routes>

        {selectedProduct && (
          <ProductPopup product={selectedProduct} onClose={closePopup} />
        )}
      </main>
    </Router>
  );
}

export default App;