import { env } from './utils/env.js';
import { buildServer } from './utils/server.js';

async function main() {
  const app = await buildServer();

  // app.log.info('Starting the migration');
  // await handleMigration();
  // app.log.info('Migration completed');

  await app.listen({ port: env.PORT, host: env.HOST });
  app.log.info(`Server is running at http://localhost:${env.PORT}`);
  app.swagger();
  app.log.info('Swagger UI: http://localhost:8000/docs');
}

await main();
