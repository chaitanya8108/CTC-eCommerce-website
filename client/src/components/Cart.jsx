import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { motion } from 'framer-motion';

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    Your cart is empty.
                </motion.p>
            ) : (
                <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    {cartItems.map(item => (
                        <li key={item.id} className="cart-item">
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </motion.ul>
            )}
            <div className="cart-summary">
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
                <button onClick={clearCart}>Clear Cart</button>
                <button className="checkout-button">Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;