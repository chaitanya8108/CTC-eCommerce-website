import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, Heart, ChevronRight } from 'lucide-react';
import Image from '../assets/image.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQs', path: '/faq' }
  ];

  const categories = [
    { name: 'Traditional Sweets', path: '/sweets' },
    { name: 'Premium Snacks', path: '/snacks' },
    { name: 'Gift Boxes', path: '/gifts' },
    { name: 'Festive Specials', path: '/specials' },
    { name: 'Bulk Orders', path: '/bulk' },
    { name: 'Catering', path: '/catering' }
  ];

  const socialLinks = [
    { Icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
    { Icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
    { Icon: Twitter, href: '#', color: 'hover:bg-sky-600' },
    { Icon: Youtube, href: '#', color: 'hover:bg-red-600' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 text-white overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-xl p-3 shadow-lg">
                <img src={Image} alt='logo' height={'50px'} width={'50px'} className="text-white font-black text-2xl leading-none"/>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Choudhary Tara Chand</h3>
                <p className="text-xs text-amber-300">Since 1950</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Serving authentic traditional sweets and premium snacks for over 75 years. Experience the taste of heritage.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center ${color} hover:scale-110 transition-all duration-300 group`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-amber-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-amber-500 rounded-full"></span>
              Categories
            </h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.path}
                    className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4" style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-amber-500 rounded-full"></span>
              Contact Us
            </h4>
            
            <div className="space-y-4">
              <div className="flex gap-3 group">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/30 transition-colors">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p className="text-sm text-gray-300">1234 Restaurant St,<br />Food City, FC 12345</p>
                </div>
              </div>

              <div className="flex gap-3 group">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/30 transition-colors">
                  <Phone className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-sm text-gray-300">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex gap-3 group">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/30 transition-colors">
                  <Mail className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-sm text-gray-300">info@ctc-restaurant.com</p>
                </div>
              </div>

              <div className="flex gap-3 group">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/30 transition-colors">
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Hours</p>
                  <p className="text-sm text-gray-300">Mon-Sun: 9 AM - 9 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div 
          className="bg-gradient-to-r from-yellow-400/10 to-amber-500/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-yellow-400/20"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
        >
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300">Get exclusive offers, recipes, and updates delivered to your inbox!</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 transition-all"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-400/50 transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.5s both' }}
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 Choudhary Tara Chand. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/sitemap" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
              Sitemap
            </a>
          </div>

          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in India
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;