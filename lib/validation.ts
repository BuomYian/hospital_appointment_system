import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(4, "Username must be at least 4 characters.")
    .max(20, "Name must be atmost 20 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
});
