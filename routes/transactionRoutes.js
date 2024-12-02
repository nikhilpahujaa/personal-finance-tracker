const express = require('express');
const { addTransaction, getTransactions } = require('../controllers/transactionController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Add a transaction route
router.post('/transactions', authMiddleware, addTransaction);

// Get all transactions route
router.get('/transactions', authMiddleware, getTransactions);

module.exports = router;
