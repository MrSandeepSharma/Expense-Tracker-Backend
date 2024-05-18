import express from "express";

import userRouter from "./routes/user.routes.js";
import expenseRouter from "./routes/expense.routes.js";

const app = express();

// Configuration
app.use(express.json());

app.use("/api/v1/auth", userRouter)
app.use("/api/v1/", expenseRouter)

export { app };