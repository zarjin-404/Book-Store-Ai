import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import connectDB from './config/mongoose.config.js';

connectDB();

import bookRoutes from './routes/book.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/api/user', userRoutes);
app.use('/api/book', bookRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
