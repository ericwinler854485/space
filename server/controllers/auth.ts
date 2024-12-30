import { Request, Response } from 'express';
import { supabase } from '../config/supabase.js';
import { AppError } from '../utils/AppError.js';

export async function signup(req: Request, res: Response) {
  const { email, password, fullName } = req.body;

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    throw new AppError(authError.message, 400);
  }

  const { error: profileError } = await supabase
    .from('profiles')
    .insert([{ id: authData.user?.id, email, full_name: fullName }]);

  if (profileError) {
    throw new AppError('Error creating profile', 400);
  }

  res.status(201).json({ message: 'User created successfully' });
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new AppError('Invalid credentials', 401);
  }

  res.json({ token: data.session?.access_token });
}

export async function forgotPassword(req: Request, res: Response) {
  const { email } = req.body;

  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    throw new AppError(error.message, 400);
  }

  res.json({ message: 'Password reset instructions sent' });
}

export async function resetPassword(req: Request, res: Response) {
  const { password } = req.body;

  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    throw new AppError(error.message, 400);
  }

  res.json({ message: 'Password updated successfully' });
}