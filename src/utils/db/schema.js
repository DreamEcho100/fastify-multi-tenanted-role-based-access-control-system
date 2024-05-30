import { primaryKey, text, timestamp, uniqueIndex, uuid, varchar } from 'drizzle-orm/pg-core';
import { pgTable } from './_table.js';

export const applications = pgTable('applications', {
  id: varchar('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const users = pgTable(
  'users',
  {
    id: varchar('id').notNull().primaryKey(),
    email: varchar('email', { length: 256 }).notNull(),
    name: varchar('name', { length: 256 }).notNull(),
    applicationId: varchar('application_id').references(() => applications.id),
    password: varchar('password', { length: 256 }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  },
  (users) => {
    return {
      cuk1: uniqueIndex().on(users.email, users.applicationId),
    };
  },
);

export const roles = pgTable(
  'roles',
  {
    id: varchar('id').notNull().primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    applicationId: varchar('application_id').references(() => applications.id),
    permissions: /** @type {import("./types.js").PermissionsFieldType} */ (
      text('permissions').array().$type()
    ),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  },
  (roles) => {
    return {
      cuk1: uniqueIndex().on(roles.name, roles.applicationId),
    };
  },
);

export const usersToRoles = pgTable(
  'users_to_roles',
  {
    applicationId: varchar('application_id')
      .references(() => applications.id)
      .notNull(),

    roleId: varchar('role_id')
      .references(() => roles.id)
      .notNull(),

    userId: varchar('user_id')
      .references(() => users.id)
      .notNull(),
  },
  (usersToRoles) => {
    return {
      cpk: primaryKey({
        columns: [usersToRoles.applicationId, usersToRoles.roleId, usersToRoles.userId],
      }),
    };
  },
);
