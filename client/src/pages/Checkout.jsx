import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { motion } from 'framer-motion';

const Checkout = () => {
    const { state } = useContext(CartContext);

    const cartItems = state.items;
    const totalAmount = state.totalAmount;

    const handleCheckout = () => {
        // checkout logic
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="checkout-container"
        >
            <h1>Checkout</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <h2>Your Order</h2>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} - ${item.price}
                            </li>
                        ))}
                    </ul>
                    <h3>Total Amount: ${totalAmount}</h3>
                    <button onClick={handleCheckout}>Complete Purchase</button>
                </div>
            )}
        </motion.div>
    );
};

export default Checkout;
