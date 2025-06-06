import { z } from "zod";

export const SignUpSchema = z.object({
  username: z.string().min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد"),
  email: z.string().email("ایمیل معتبر نیست"),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
  repeatPassword: z.string(),
}).refine((data) => data.password === data.repeatPassword, {
  path: ["repeatPassword"],
  message: "رمز عبور و تکرار آن یکسان نیستند",
});

export type SignUpData = z.infer<typeof SignUpSchema>;
