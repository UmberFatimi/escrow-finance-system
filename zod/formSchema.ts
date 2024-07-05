import { z } from "zod";

export const RegisterFormSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
  email: z.string().min(1, { message: "name is required" }),
  password: z.string().min(1, { message: "name is required" }),
  role: z.string(),
});

export const SigninFormSchema = z.object({
  email: z.string().min(1, { message: "name is required" }),
  password: z.string().min(1, { message: "name is required" }),
});
