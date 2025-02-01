import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
    },

    price: {
      type: String,
      required: [true, 'Price is required'],
      
    },

    image: {
      type: String,
      required: [true, 'Image is required'],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);

// Create and export the Book model based on bookSchema
export default mongoose.model("book", bookSchema);
