import { asyncHandler } from "../utils/asyncHandler.utils.js";

const addExpense = asyncHandler( async(req, res) => {
    res.status(500).json({
        message: "OK"
    })
})

const getExpense = asyncHandler( async(req, res) => {
    res.status(500).json({
        message: "OK"
    })
})

const updateExpense = asyncHandler( async(req, res) => {
    res.status(500).json({
        message: "OK"
    })
})

const deleteExpense = asyncHandler( async(req, res) => {
    res.status(500).json({
        message: "OK"
    })
})

export { addExpense, getExpense, updateExpense, deleteExpense }