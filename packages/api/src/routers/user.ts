import { createUserSchema, getUserSchema } from "../schemas/user.schema";
import { protectedProcedure, publicProcedure, router } from "../trpc/init";

export const userRouter = router({
  create: publicProcedure.input(createUserSchema).mutation(({ input, ctx }) => {
    return ctx.useCases.createUser.execute(input);
  }),

  // ID取得
  byId: publicProcedure.input(getUserSchema).query(({ input, ctx }) => {
    return ctx.useCases.getUser.execute(input);
  }),

  // 自分の情報（認証あり）
  me: protectedProcedure.query(({ ctx }) => {
    return ctx.useCases.getUser.execute({ id: ctx.user.id });
  }),
});
