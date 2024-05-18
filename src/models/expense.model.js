import mongoose, { Schema } from "mongoose";

const expenseSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        amount: {
            type: Number,
            required: [true, "Amount is required"],
            min: [0, "Amount must be a positive number"]
        },
        category: {
            type: String,
            required: [true, "Category is required"],
            enum: ["Food", "Transport", "Utilities", "Health", "Entertainment", "Other"],
            default: "Other"
        }
    },
    { timestamps: true }
);

export const Expense = mongoose.model("Expense", expenseSchema);