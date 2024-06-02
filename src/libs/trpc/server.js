import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { createContext } from './context.js';
import { appRouter } from './router/index.js';

const trpcOptions =
  /** @satisfies {import('@trpc/server/adapters/fastify').FastifyTRPCPluginOptions<import('./router/index.js').AppRouter>['trpcOptions']} */ ({
    router: appRouter,
    createContext,
    onError(param) {
      // report to error monitoring
      param.req.log.error(`Error in tRPC handler on path '${param.path}':`);
      param.req.log.error(param.error);
    },
    batching: { enabled: true },
    responseMeta: undefined,
    // maxBodySize: 5000,
    // responseMeta: '{ }',
  });

/** @param {import('../../utils/server.js').FastifyApp} app */
export default async function registerTRPC(app) {
  // Handle incoming tRPC requests
  await app.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions,
  });
}
