import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { env } from '../env.js';
import * as schema from './schema.js';

export * as dbSchema from './schema.js';

export const pool = new Pool({
  connectionString: env.DATABASE_CONNECTION,
  ssl: true,
});

export const db = drizzle(pool, { schema: schema });
