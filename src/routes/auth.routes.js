import express from 'express'
import { registerUser } from '../controllers/auth.controller.js';
const router = express.Router();

router.get('/', registerUser)

export default router