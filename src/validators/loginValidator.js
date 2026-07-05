import * as z from "zod";

const loginSchema = z.object({
  email: z.literal("SabziDev@gmail.com", {
    error: "INVALID_EMAIL",
  }),

  password: z.literal("admin", {
    error: "INVALID_PASSWORD",
  }),

  rememberMe: z.boolean(),
});

export default loginSchema;
