import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const appRouter = router({
  health: publicProcedure.query(() => ({ status: "ok" })),
  hello: publicProcedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => ({
      greeting: `Hello, ${input.name ?? "World"}!`,
    })),
});

export type AppRouter = typeof appRouter;
