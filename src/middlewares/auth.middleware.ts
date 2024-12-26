import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Middleware to authenticate user
export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string, role: string };
    req.body.userRole = decoded.role; // Add role to request body
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Middleware to authorize admin-only routes
export const authorizeAdmin = (req: Request, res: Response, next: NextFunction): void => {
  if (req.body.userRole !== "admin") {
    res.status(403).json({ message: "Forbidden: Admins only" });
    return;
  }
  next();
};
