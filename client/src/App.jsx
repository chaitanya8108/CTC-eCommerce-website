import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import About from './pages/About';
import { CartProvider } from './context/CartContext';
import Menu from './components/Menu';
import Contact from './pages/Contact';
import ProtectedRoute from './components/ProtectedRoute';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <CartProvider>
      <Router>

        {/* THIS FIXES EVERYTHING */}
        <ScrollToTop />  

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* Auth */}
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />

          {/* Protected */}
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route
            path="/product/:id"
            element={
              <ProtectedRoute>
                <ProductDetail />
              </ProtectedRoute>
            }
          />

          <Route
            path="/menu"
            element={
              <ProtectedRoute>
                <Menu />
              </ProtectedRoute>
            }
          />

          {/* Public */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
