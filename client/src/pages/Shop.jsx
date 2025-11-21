import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
    try {
        const response = await fetch("http://localhost:5002/api/products");

        if (!response.ok) {
            console.error("Error status:", response.status);
            throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        console.log("Products fetched:", data);
        setProducts(data);

    } catch (err) {
        console.error("Fetch error:", err.message);
    }
};


        fetchProducts();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="shop-container"
        >
            <h1 className="shop-title">Our Menu</h1>
            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </motion.div>
    );
};

export default Shop;