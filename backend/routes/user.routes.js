import express from 'express';
import upload from '../config/multer.config.js';
import {
  deleteUser,
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
} from '../controllers/user.controllers.js';
import verifyUser from '../middlewares/user.middlwares.js';

const router = express.Router();

router.post('/register', upload.single('profile'), registerUser);
router.post('/login', loginUser);
router.patch('/update/:id', verifyUser, upload.single('profile'), updateUser);
router.delete('/delete/:id', verifyUser, deleteUser);
router.post('/logout', verifyUser, logoutUser);

export default router;
