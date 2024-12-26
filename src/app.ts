import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import movieRoutes from "./routes/movie.routes";
import connectDB from "./utils/dbConnect";
import { Request, Response } from "express";
import authRoutes from "./routes/auth.routes";

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Define routes
app.use("/api", movieRoutes);

app.use("/log", authRoutes);
// Default route
app.get("/", (_req: Request, res: Response) => {
    res.send("Movie Lobby API is running");
  });

export default app;

