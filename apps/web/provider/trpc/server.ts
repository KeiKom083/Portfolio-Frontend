import "server-only";
import type { AppRouter } from "@portfolio/api";
import { createTRPCClient, httpLink } from "@trpc/client";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { cache } from "react";
import { ENV } from "@/constants/env";
import { makeQueryClient } from "./query-client";

export const getQueryClient = cache(makeQueryClient);

export const trpc = createTRPCOptionsProxy<AppRouter>({
  client: createTRPCClient({
    links: [
      httpLink({
        url: ENV.TRPC_URL,
      }),
    ],
  }),
  queryClient: getQueryClient,
});
