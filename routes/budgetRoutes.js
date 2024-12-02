const express = require('express');
const { setBudget, getBudget, updateBudget, deleteBudget } = require('../controllers/budgetController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Create Budget
router.post('/budget', authMiddleware, setBudget);

// Get Budgets
router.get('/budget', authMiddleware, getBudget);

// Update Budget
router.put('/budget/:id', authMiddleware, updateBudget); // Adding update route

// Delete Budget
router.delete('/budget/:id', authMiddleware, deleteBudget); // Adding delete route

module.exports = router;
