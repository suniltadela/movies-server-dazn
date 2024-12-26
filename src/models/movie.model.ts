import mongoose, { Schema, Document, Model } from "mongoose";

interface IMovie extends Document {
  title: string;
  genre: string;
  rating: number;
  streamingLink: string;
}

const MovieSchema: Schema<IMovie> = new Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  streamingLink: { type: String, required: true },
});

const Movie: Model<IMovie> = mongoose.model<IMovie>("Movie", MovieSchema);
export default Movie;
export type { IMovie };
