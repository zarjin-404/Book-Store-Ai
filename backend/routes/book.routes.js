import express from 'express';
const router = express.Router();

import upload from '../config/multer.config.js';
import { createBooks, deletedBooks, updateBooks } from '../controllers/book.controllers.js';

router.post('/create', upload.single('image'), createBooks);
router.patch('/upload/:id', upload.single('image'), updateBooks);
router.delete('/delete/:id', deletedBooks);

export default router;
