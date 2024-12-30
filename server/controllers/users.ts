import { Request, Response } from 'express';
import { supabase } from '../config/supabase.js';
import { AppError } from '../utils/AppError.js';

export async function getProfile(req: Request, res: Response) {
  const userId = req.user?.id;

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    throw new AppError('Error fetching profile', 400);
  }

  res.json(data);
}

export async function updateProfile(req: Request, res: Response) {
  const userId = req.user?.id;
  const { fullName } = req.body;

  const { data, error } = await supabase
    .from('profiles')
    .update({ full_name: fullName, updated_at: new Date().toISOString() })
    .eq('id', userId)
    .select()
    .single();

  if (error) {
    throw new AppError('Error updating profile', 400);
  }

  res.json(data);
}