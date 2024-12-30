import { Request, Response, NextFunction } from 'express';
import { supabase } from '../config/supabase.js';
import { AppError } from '../utils/AppError.js';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
      };
    }
  }
}

export async function auth(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new AppError('No token provided', 401);
    }

    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      throw new AppError('Invalid token', 401);
    }

    req.user = {
      id: user.id,
      email: user.email!,
    };

    next();
  } catch (error) {
    next(error);
  }
}