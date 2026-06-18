import { serve } from "@hono/node-server";
import { appRouter } from "@portfolio/api";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  "/trpc/*",
  cors({
    origin: process.env.CORS_ORIGIN ?? "http://localhost:3000",
  }),
);

app.all("/trpc/*", (c) =>
  fetchRequestHandler({
    endpoint: "/trpc",
    req: c.req.raw,
    router: appRouter,
    createContext: () => ({}),
  }),
);

const port = Number(process.env.PORT ?? 3001);

serve({ fetch: app.fetch, port });
