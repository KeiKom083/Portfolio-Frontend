import {z} from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, { message: "名前は必須項目です" }),
  email: z.email({ message: "有効なメールアドレスではありません" }),
  password: z.string().min(6, { message: "パスワードは6文字以上でなければなりません" }),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.email(),
});

export type CreateUserOutput = z.infer<typeof userSchema>;