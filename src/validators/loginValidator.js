import * as z from "zod";

const loginSchema = z.object({
  email: z
    .string({ error: "ایمیل باید یک متن باشد!" })
    .trim()
    .toLowerCase()
    .refine((value) => value === "sabzidev@gmail.com", {
      message: "INVALID_EMAIL",
    }),

  password: z
    .string({ error: "گذرواژه باید یک متن باشد!" })
    .refine((value) => value === "admin", {
      message: "INVALID_PASSWORD",
    }),

  rememberMe: z.boolean(),
});

export default loginSchema;
