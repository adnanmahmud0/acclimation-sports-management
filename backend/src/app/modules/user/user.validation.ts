import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({ error: 'Name is required' }),
    email: z.string({ error: 'Email is required' }),
    password: z.string({ error: 'Password is required' }),
    image: z.string().optional(),
  }),
});

const updateUserZodSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  image: z.string().optional(),
});

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
};
