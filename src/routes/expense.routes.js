import { Router } from "express";
import { getExpense, addExpense, updateExpense, deleteExpense } from "../controllers/expense.controllers.js";

const router = Router();

router.route("/expense").get(getExpense)

router.route("/expense").post(addExpense)

router.route("/expense/:id").put(updateExpense)

router.route("/expense/:id").delete(deleteExpense)

export default router;