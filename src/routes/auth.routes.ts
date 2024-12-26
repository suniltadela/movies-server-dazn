import express from "express";
import { login } from "../controllers/auth.controller";  // Import the login controller
import { register } from "../controllers/register.controller";

const router = express.Router();

router.post("/register", register);
// POST route for user login
router.post("/login", login);

export default router;
