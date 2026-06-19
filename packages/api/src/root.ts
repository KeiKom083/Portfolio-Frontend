import { userRouter } from "./routers/user";
import { publicProcedure, router } from "./trpc/init";

export const appRouter = router({
  health: publicProcedure.query(() => ({ status: "ok" })),
  user: userRouter,
});

export type AppRouter = typeof appRouter;
