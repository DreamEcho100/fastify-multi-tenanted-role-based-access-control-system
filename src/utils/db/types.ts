import { text } from 'drizzle-orm/pg-core';

const permissionsField = text('permissions').array().$type<string[]>();
export type PermissionsFieldType = typeof permissionsField;
