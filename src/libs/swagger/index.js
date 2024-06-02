import fastifySwagger from '@fastify/swagger';
import { openApiDocument } from '../openapi/index.js';
import fastifySwaggerUi from '@fastify/swagger-ui';

/** @param {import('../../utils/server.js').FastifyApp} app */
export async function registerSwagger(app) {
  // Server Swagger UI
  await app.register(fastifySwagger, {
    mode: 'static',
    specification: { document: openApiDocument },
  });
  app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      // docExpansion: 'full',
      deepLinking: false,
    },
    uiHooks: {
      onRequest: function (_request, _reply, next) {
        next();
      },
      preHandler: function (_request, _reply, next) {
        next();
      },
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, _request, _reply) => {
      return swaggerObject;
    },
    transformSpecificationClone: true,
  });
}
