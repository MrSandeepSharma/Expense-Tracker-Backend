import express from "express";

import userRouter from "./routes/user.routes.js";

const app = express();

// Configuration
app.use(express.json());

app.use("/api/v1/auth", userRouter)

export { app };