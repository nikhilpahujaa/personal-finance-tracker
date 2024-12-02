const Budget = require('../models/Budget');

// Set Budget (Create)
exports.setBudget = async (req, res) => {
    try {
        const budget = new Budget({ ...req.body, userId: req.user.id });
        await budget.save();
        res.status(201).json(budget);
    } catch (err) {
        res.status(500).json({ error: 'Failed to set budget' });
    }
};

// Get Budget (Read)
exports.getBudget = async (req, res) => {
    try {
        const budgets = await Budget.find({ userId: req.user.id });
        res.status(200).json(budgets);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch budget' });
    }
};

// Update Budget
exports.updateBudget = async (req, res) => {
    const { id } = req.params; // Budget ID from the request parameters
    const { category, limit } = req.body; // New values for category and limit

    try {
        const budget = await Budget.findByIdAndUpdate(id, { category, limit }, { new: true });
        if (!budget) {
            return res.status(404).json({ error: 'Budget not found' });
        }
        res.status(200).json(budget);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update budget' });
    }
};

// Delete Budget
exports.deleteBudget = async (req, res) => {
    const { id } = req.params; // Budget ID from the request parameters

    try {
        const budget = await Budget.findByIdAndDelete(id);
        if (!budget) {
            return res.status(404).json({ error: 'Budget not found' });
        }
        res.status(200).json({ message: 'Budget deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete budget' });
    }
};