import * as z from "zod";

export const loginFormSchema = z.object({
  username: z.string().min(1, { message: "Username required" }),
  password: z.string().min(1, { message: "Password required" }),
});

export type loginFormType = z.infer<typeof loginFormSchema>;
