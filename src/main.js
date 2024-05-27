import { env } from './utils/env.js';
import { buildServer } from './utils/server.js';

async function main() {
  const app = await buildServer();

  await app.listen({ port: env.PORT, host: env.HOST });

  app.log.info(`Server is running at http://localhost:${env.PORT}`);
}

await main();
