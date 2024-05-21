import express from "express";
import cors from "cors";

import userRouter from "./routes/user.routes.js";
import expenseRouter from "./routes/expense.routes.js";
import { jwtAuthMiddleware } from "./middlewares/jwt.middlewares.js";

const app = express();

const corsOptions = {
    origin: ["http://localhost:5173", "https://expensetrackerbyme.vercel.app"],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

// Configuration
app.use(express.json());
app.use(cors(corsOptions))

app.use("/api/v1/auth", userRouter)
app.use("/api/v1/", jwtAuthMiddleware, expenseRouter)

export { app };