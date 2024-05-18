import express from "express";

import userRouter from "./routes/user.routes.js";

const app = express();

app.use("/api/v1/auth", userRouter)

export { app };