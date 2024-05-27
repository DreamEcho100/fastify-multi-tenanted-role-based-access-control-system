import 'dotenv/config';
// import { migrate } from 'drizzle-orm/node-postgres';
import { db, pool } from './src/utils/db/index.js';
import { migrate } from 'drizzle-orm/node-postgres/migrator';

// This will run migrations on the database, skipping the ones already applied

export async function handleMigration() {
  await migrate(db, { migrationsFolder: './migrations' });

  // Don't forget to close the pool, otherwise the script will hang
  await pool.end();
}
