import { defineConfig } from 'drizzle-kit';

const DATABASE_CONNECTION = process.env.DATABASE_CONNECTION;

if (typeof DATABASE_CONNECTION !== 'string') {
  throw new Error('DATABASE_CONNECTION environment variable is required');
}

export default defineConfig({
  dialect: 'postgresql',
  out: './migrations',
  schema: './src/utils/db/schema.js',
  dbCredentials: {
    url: DATABASE_CONNECTION,
  },
  breakpoints: false,
  tablesFilter: ['ftc_*'],
});
