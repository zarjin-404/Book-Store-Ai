import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to the database");
  } catch (error) {
    console.log("Error connecting to the database");
    console.log(error);
  }
};

export default connectDB;
