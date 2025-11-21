import React, { useEffect, useState } from 'react';
import { Search, Filter, ShoppingCart, Star, TrendingUp, Sparkles } from 'lucide-react';

const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-yellow-200/50 overflow-hidden transform hover:-translate-y-2 transition-all duration-500"
      style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          {product.badge}
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-yellow-100 to-amber-100">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-amber-300 flex items-center justify-center">
          <span className="text-7xl">{product.emoji || '🍬'}</span>
        </div>
        
        {/* Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-sm font-medium line-clamp-2">{product.description || 'Delicious traditional sweet made with premium ingredients'}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating || 4.5)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 font-medium">
            {product.rating || '4.5'} ({product.reviews || '120'})
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors line-clamp-1">
          {product.name}
        </h3>

        {/* Price and Weight */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-black bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
              ₹{product.price}
            </p>
            {product.originalPrice && (
              <p className="text-sm text-gray-400 line-through">₹{product.originalPrice}</p>
            )}
          </div>
          {product.weight && (
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {product.weight}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="w-full py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-400/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Demo data fallback
  const demoProducts = [
    {
      _id: '1',
      name: 'Kaju Katli',
      price: 499,
      originalPrice: 599,
      weight: '500g',
      rating: 4.8,
      reviews: 245,
      badge: 'Best Seller',
      emoji: '🥮',
      category: 'Sweets',
      description: 'Premium cashew fudge with silver leaf garnish'
    },
    {
      _id: '2',
      name: 'Gulab Jamun',
      price: 299,
      weight: '1kg',
      rating: 4.7,
      reviews: 189,
      emoji: '🍡',
      category: 'Sweets',
      description: 'Soft milk dumplings soaked in rose-flavored syrup'
    },
    {
      _id: '3',
      name: 'Samosa',
      price: 150,
      weight: '12 pcs',
      rating: 4.9,
      reviews: 320,
      badge: 'Popular',
      emoji: '🥟',
      category: 'Snacks',
      description: 'Crispy pastry filled with spiced potatoes'
    },
    {
      _id: '4',
      name: 'Rasgulla',
      price: 350,
      weight: '1kg',
      rating: 4.6,
      reviews: 156,
      emoji: '🍥',
      category: 'Sweets',
      description: 'Spongy cottage cheese balls in sugar syrup'
    },
    {
      _id: '5',
      name: 'Jalebi',
      price: 280,
      originalPrice: 320,
      weight: '500g',
      rating: 4.7,
      reviews: 198,
      badge: 'Hot & Fresh',
      emoji: '🌀',
      category: 'Sweets',
      description: 'Crispy spiral sweets soaked in saffron syrup'
    },
    {
      _id: '6',
      name: 'Namkeen Mix',
      price: 199,
      weight: '500g',
      rating: 4.5,
      reviews: 142,
      emoji: '🥜',
      category: 'Snacks',
      description: 'Crunchy mixture of savory Indian snacks'
    }
  ];

  const categories = ['All', 'Sweets', 'Snacks', 'Special'];

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5002/api/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        setMenuItems(data.length > 0 ? data : demoProducts);
        setError(null);
      } catch (error) {
        console.error('Error fetching menu items:', error);
        setError(error.message);
        // Use demo data as fallback
        setMenuItems(demoProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Filter products
  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-yellow-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center pt-10 space-y-4 mb-12" style={{ animation: 'fadeInDown 0.8s ease-out' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full">
            <TrendingUp className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">Fresh Daily</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
            Our Menu
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our handcrafted collection of traditional sweets and premium snacks
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-10 space-y-4" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for sweets, snacks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-yellow-200 rounded-2xl focus:border-amber-400 focus:outline-none focus:ring-4 focus:ring-yellow-100 transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-lg shadow-yellow-400/50 scale-105'
                    : 'bg-white text-gray-700 hover:bg-yellow-50 border-2 border-yellow-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-amber-100 border-2 border-amber-300 rounded-xl text-amber-800 text-center">
            <p className="font-semibold">Using demo data - couldn't connect to server</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                <div className="h-64 bg-gradient-to-br from-yellow-200 to-amber-200"></div>
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredItems.length === 0 ? (
          // No Results
          <div className="text-center py-20">
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No items found</h3>
            <p className="text-gray-500">Try adjusting your search or filter</p>
          </div>
        ) : (
          // Product Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <ProductCard key={item._id} product={item} index={index} />
            ))}
          </div>
        )}

        {/* View More Button */}
        {!loading && filteredItems.length > 0 && (
          <div className="text-center mt-12" style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}>
            <button className="px-8 py-4 bg-white text-amber-700 font-bold rounded-full border-3 border-amber-500 hover:bg-amber-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              View All Products
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
    </section>
  );
};

export default Menu;