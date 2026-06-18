import type { AppRouter } from "@portfolio/api";
import { createTRPCClient, httpBatchLink } from "@trpc/client";

export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: process.env.NEXT_PUBLIC_TRPC_URL ?? "http://localhost:3001/trpc",
    }),
  ],
});
