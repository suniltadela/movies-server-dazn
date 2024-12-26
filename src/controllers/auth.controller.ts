import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/user.model";
import jwt from "jsonwebtoken";

// User login and token generation
export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).json({ message: "Invalid credentials" });
    return;
  }

  // Check if password is correct
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(400).json({ message: "Invalid credentials" });
    return;
  }

  // Generate JWT token
  const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

  res.json({ message: "Login successful", token });
};
