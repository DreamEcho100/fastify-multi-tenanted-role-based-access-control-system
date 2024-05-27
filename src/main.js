import { eq } from 'drizzle-orm';
import { db, dbSchema } from './utils/db/index.js';
import { env } from './utils/env.js';
import { buildServer } from './utils/server.js';
import { handleMigration } from '../migrate.js';

async function main() {
  const app = await buildServer();

  // app.log.info('Starting the migration');
  // await handleMigration();
  // app.log.info('Migration completed');

  await app.listen({ port: env.PORT, host: env.HOST });

  app.log.info(`Server is running at http://localhost:${env.PORT}`);

  app.log.debug('Test querying the database');
}

await main();
