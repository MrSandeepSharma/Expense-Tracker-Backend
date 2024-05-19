import { Router } from "express";

import { registerUser, loginUser, getCurrentUser, logoutUser } from "../controllers/user.controllers.js";
import { jwtAuthMiddleware } from "../middlewares/jwt.middlewares.js";

const router = Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current-user", jwtAuthMiddleware, getCurrentUser);

router.post("/logout", jwtAuthMiddleware, logoutUser);

export default router;