import { asyncHandler } from "../utils/asyncHandler.utils.js";
import { Expense } from "../models/expense.model.js";

const addExpense = asyncHandler( async(req, res) => {
    try {
        const { name, amount, category } = req.body;

        const newExpense = new Expense({
            userId: req.user.id,
            name,
            amount,
            category
        });
    
        const createdExpense = await newExpense.save();
        res.status(201).json(createdExpense); 
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'});
    }
})

const getExpense = asyncHandler( async(req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.user.id });
        res.status(201).json(expenses); 
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'});
    }
})

const deleteExpense = asyncHandler( async(req, res) => {
    try {
        const { expenseId } = req.body;
        const expense = await Expense.findOne({ _id: expenseId, userId: req.user.id });

        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        await Expense.deleteOne({ _id: expenseId });
        res.json({ message: 'Expense removed' });
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'});
    }
})

export { addExpense, getExpense, deleteExpense }
