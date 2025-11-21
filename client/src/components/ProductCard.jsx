import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <motion.div 
            className="product-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className="add-to-cart" onClick={() => onAddToCart(product)}>
                Add to Cart
            </button>
        </motion.div>
    );
};

export default ProductCard;