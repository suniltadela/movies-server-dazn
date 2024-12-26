// import { Schema, Document, model } from "mongoose";
// import { UserRole } from "../../roles"; // Importing the UserRole enum

// export interface IUser extends Document {
//   email: string;
//   password: string;
//   role: UserRole; // Using the enum for the role
// }

// const userSchema = new Schema<IUser>({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: Object.values(UserRole), required: true, default: UserRole.User }, // Default to 'user'
// });

// const User = model<IUser>("User", userSchema);

// export default User;
