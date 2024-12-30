import { Router } from 'express';
import { getProfile, updateProfile } from '../controllers/users.js';
import { auth } from '../middleware/auth.js';
import { validateRequest } from '../middleware/validateRequest.js';
import { updateProfileSchema } from '../schemas/users.js';

const router = Router();

router.get('/profile', auth, getProfile);
router.patch('/profile', auth, validateRequest(updateProfileSchema), updateProfile);

export const userRouter = router;