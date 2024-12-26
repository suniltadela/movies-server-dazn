import express from "express";
import {
  listMovies,
  searchMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movie.controller";
import { authenticate, authorizeAdmin } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/movies", listMovies);
router.get("/search", searchMovies);
router.post("/movies", authenticate, authorizeAdmin, addMovie);
router.put("/movies/:id", authenticate, authorizeAdmin, updateMovie);
router.delete("/movies/:id", authenticate, authorizeAdmin, deleteMovie);

export default router;
