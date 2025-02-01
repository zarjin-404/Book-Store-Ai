import cloudinary from "./cloudinary.config.js";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Book Store Images",
    allowedFormats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage: storage });

export default upload;
