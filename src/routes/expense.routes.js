import { Router } from "express";
import { getExpense, addExpense, deleteExpense } from "../controllers/expense.controllers.js";

const router = Router();

router.route("/expense").get(getExpense)

router.route("/expense").post(addExpense)

router.route("/expense").delete(deleteExpense)

export default router;