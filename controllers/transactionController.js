const Transaction = require('../models/Transaction');

// Add a transaction
exports.addTransaction = async (req, res) => {
  try {
    const newTransaction = new Transaction({ ...req.body, userId: req.user.id });
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add transaction' });
  }
};

// Get user transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user.id });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
};
