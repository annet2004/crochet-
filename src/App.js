import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import UserPage from './pages/UserPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <HomeSection />
                <ProductsSection />
                <ContactSection />
              </>
            }
          />

          {/* User route */}
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;