import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import Image from '../assets/image.png';
import { Link } from 'react-router-dom';
import { UserButton, SignedIn, SignedOut } from '@clerk/clerk-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-gradient-to-r from-yellow-50 to-amber-50 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-xl p-3 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <img src={Image} alt="logo" height="50" width="50" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent">
                  Choudhary Tara Chand
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative px-5 py-2 text-gray-700 font-medium hover:text-amber-600 transition-colors duration-300 group"
                  style={{ animation: `slideDown 0.5s ease-out ${index * 0.1}s both` }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </Link>
              ))}

              {/* Cart */}
              <Link
                to="/cart"
                className="relative px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-400/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <ShoppingCart size={20} />
                <span>Cart</span>
              </Link>

              {/* --------- CONDITIONAL DESKTOP BUTTONS --------- */}
              
              {/* If user is signed in → Show UserButton */}
              <SignedIn>
                <div className="flex justify-center items-center p-1 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 shadow-md hover:shadow-lg transition-all duration-300">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>

              {/* If user is signed out → Show Sign Up button */}
              <SignedOut>
                <Link
                  to="/sign-up"
                  className="ml-3 px-5 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Sign Up
                </Link>
              </SignedOut>

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white hover:shadow-lg hover:shadow-yellow-400/50 transform hover:scale-105 transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ----------- MOBILE MENU ----------- */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4 bg-gradient-to-b from-yellow-50 to-white space-y-4">

            {/* ⭐ UserButton at the top center */}
            <SignedIn>
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center p-1 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 shadow-md">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
            </SignedIn>

            <SignedOut>
              <div className="flex justify-center pb-2">
                <Link
                  to="/sign-up"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Sign Up
                </Link>
              </div>
            </SignedOut>

            {/* Navigation links */}
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-5 py-3 text-gray-700 font-medium rounded-xl hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-500 hover:text-white transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}

            {/* Cart */}
            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <ShoppingCart size={20} />
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Animations */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

export default Navbar;
