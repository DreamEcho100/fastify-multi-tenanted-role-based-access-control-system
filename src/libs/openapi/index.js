import { fastifyTRPCOpenApiPlugin, generateOpenApiDocument } from 'trpc-openapi';
import { appRouter } from '../trpc/router/index.js';
import { createContext } from '../trpc/context.js';

// Generate OpenAPI schema document
export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: 'Example CRUD API',
  description: 'OpenAPI compliant REST API built using tRPC with Fastify',
  version: '1.0.0',
  baseUrl: 'http://localhost:8000/api',
  docsUrl: 'https://github.com/jlalmes/trpc-openapi',
  // tags: ['auth', 'users', 'posts'],
});

/** @param {import('../../utils/server.js').FastifyApp} app */
export async function registerOpenApi(app) {
  // Handle incoming OpenAPI requests
  await app.register(fastifyTRPCOpenApiPlugin, {
    basePath: '/api',
    router: appRouter,
    createContext: createContext,
    maxBodySize: 5000,
    /** @param {{ path: string; error: Error }} param0  */
    onError({ path, error }) {
      // report to error monitoring
      console.error(`Error in tRPC handler on path '${path}':`, error);
    },
    // batching: { enabled: true },
    responseMeta: undefined,
  }); /* 👈 */

  // Serve the OpenAPI document
  app.get('/openapi.json', () => openApiDocument);
}
