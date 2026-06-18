import cors from "@fastify/cors";
import { appRouter } from "@portfolio/api";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import Fastify from "fastify";

const server = Fastify({ logger: true });

await server.register(cors, {
  origin: process.env.CORS_ORIGIN ?? "http://localhost:3000",
});

await server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: {
    router: appRouter,
  },
});

const port = Number(process.env.PORT ?? 3001);

try {
  await server.listen({ port, host: "0.0.0.0" });
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
