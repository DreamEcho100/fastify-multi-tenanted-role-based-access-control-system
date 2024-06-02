import fastify from 'fastify';
import { logger } from './logger.js';
import { handleExitSignals } from './graceful-shutdown.js';
import { env } from './env.js';
import registerTRPC from '../libs/trpc/server.js';
import cors from '@fastify/cors';
import { registerOpenApi } from '../libs/openapi/index.js';
import { registerSwagger } from '../libs/swagger/index.js';

export async function buildServer() {
  const app = fastify({ logger: env.NODE_ENV === 'development' ? logger : false });

  await app.register(cors);
  handleExitSignals(app);

  // register plugins

  // register routes
  await registerTRPC(app);
  await registerOpenApi(app);
  await registerSwagger(app);

  return app;
}

/**
 * @typedef {Awaited<ReturnType<typeof buildServer>>} FastifyApp
 */
