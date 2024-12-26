import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  role: string; // Could be "admin" or "user"
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },  // Email is unique and required
  password: { type: String, required: true },            // Password is required
  role: { type: String, required: true, enum: ['admin', 'user'], default: 'user' },  // Role can be either admin or user
});

// Create the User model
const User = mongoose.model<IUser>('User', userSchema);

export default User;
