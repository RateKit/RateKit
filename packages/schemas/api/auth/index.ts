import { z } from "zod/v4";

export const signUpRequestSchema = z.object({
	name: z.string().min(1),
	email: z.email(),
	password: z.string().min(8),
});
