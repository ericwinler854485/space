import { Router } from 'express';
import { login, signup, forgotPassword, resetPassword } from '../controllers/auth.js';
import { validateRequest } from '../middleware/validateRequest.js';
import { loginSchema, signupSchema, forgotPasswordSchema, resetPasswordSchema } from '../schemas/auth.js';

const router = Router();

router.post('/login', validateRequest(loginSchema), login);
router.post('/signup', validateRequest(signupSchema), signup);
router.post('/forgot-password', validateRequest(forgotPasswordSchema), forgotPassword);
router.post('/reset-password', validateRequest(resetPasswordSchema), resetPassword);

export const authRouter = router;