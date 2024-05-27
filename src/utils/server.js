import fastify from 'fastify';
import { logger } from './logger.js';
import { handleExitSignals } from './graceful-shutdown.js';
import { env } from './env.js';

export async function buildServer() {
  const app = fastify({ logger: env.NODE_ENV === 'development' ? logger : false });

  handleExitSignals(app);

  // register plugins

  // register routes

  return app;
}

/**
 * @typedef {Awaited<ReturnType<typeof buildServer>>} FastifyApp
 */
