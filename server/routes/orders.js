const express = require('express');
const router = express.Router();

const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder
} = require('../controllers/orderController');

// Create a new order
router.post('/', createOrder);

// Get all orders
router.get('/', getAllOrders);

// Get a specific order by ID
router.get('/:id', getOrderById);

// Update order status
router.put('/:id', updateOrderStatus);

// Delete an order
router.delete('/:id', deleteOrder);

module.exports = router;
