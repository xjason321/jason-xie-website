import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: 'Too short'}),
    username: z.string().min(2, {message: 'Too short'}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'Password must be at least 8 characters!'})
  })

export const LoginValidation = z.object({
    username: z.string().min(0, {message: "Please enter a valid username."}),
    password: z.string().min(0, {message: "Please enter a valid password."})
})

export const PromptValidation = z.object({
  prompt: z.string().min(1, {message: "Please enter a valid prompt."})
})