import mongoose from "mongoose";

// Define the user schema with validation rules
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },

    profile: {
      type: String,
    },
  },
  {
    timestamps: true, // Automatically creates createdAt and updatedAt fields
  }
);

// Create and export the User model
export default mongoose.model("user", userSchema);
