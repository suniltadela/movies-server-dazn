import { Request, Response } from "express";
import Movie, { IMovie } from "../models/movie.model";

export const listMovies = async (_: Request, res: Response): Promise<void> => {
  const movies: IMovie[] = await Movie.find();
  res.json(movies);
};

export const searchMovies = async (req: Request, res: Response): Promise<void> => {
  const query = req.query.q as string;
  const movies: IMovie[] = await Movie.find({
    $or: [{ title: { $regex: query, $options: "i" } }, { genre: { $regex: query, $options: "i" } }],
  });
  res.json(movies);
};

export const addMovie = async (req: Request, res: Response): Promise<void> => {
  const { title, genre, rating, streamingLink } = req.body;
  const newMovie = new Movie({ title, genre, rating, streamingLink });
  await newMovie.save();
  res.json({ message: "Movie added successfully", movie: newMovie });
};

export const updateMovie = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const updates = req.body;
  const updatedMovie = await Movie.findByIdAndUpdate(id, updates, { new: true });
  if (!updatedMovie) {
    res.status(404).json({ message: "Movie not found" });
    return;
  }
  res.json({ message: "Movie updated successfully", movie: updatedMovie });
};

export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const deletedMovie = await Movie.findByIdAndDelete(id);
  if (!deletedMovie) {
    res.status(404).json({ message: "Movie not found" });
    return;
  }
  res.json({ message: "Movie deleted successfully" });
};
