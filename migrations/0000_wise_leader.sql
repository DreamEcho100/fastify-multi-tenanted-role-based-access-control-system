CREATE TABLE IF NOT EXISTS "fastify_tenant_control_applications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "fastify_tenant_control_roles" (
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL,
	"applicationId" uuid,
	"permissions" text[],
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "fastify_tenant_control_roles_name_applicationId_pk" PRIMARY KEY("name","applicationId")
);

CREATE TABLE IF NOT EXISTS "fastify_tenant_control_users" (
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(256) NOT NULL,
	"name" varchar(256) NOT NULL,
	"applicationId" uuid,
	"password" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "fastify_tenant_control_users_email_applicationId_pk" PRIMARY KEY("email","applicationId")
);

CREATE TABLE IF NOT EXISTS "fastify_tenant_control_usersToRoles" (
	"applicationId" uuid NOT NULL,
	"roleId" uuid NOT NULL,
	"userId" uuid NOT NULL,
	CONSTRAINT "fastify_tenant_control_usersToRoles_applicationId_roleId_userId_pk" PRIMARY KEY("applicationId","roleId","userId")
);

DO $$ BEGIN
 ALTER TABLE "fastify_tenant_control_roles" ADD CONSTRAINT "fastify_tenant_control_roles_applicationId_fastify_tenant_control_applications_id_fk" FOREIGN KEY ("applicationId") REFERENCES "public"."fastify_tenant_control_applications"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "fastify_tenant_control_users" ADD CONSTRAINT "fastify_tenant_control_users_applicationId_fastify_tenant_control_applications_id_fk" FOREIGN KEY ("applicationId") REFERENCES "public"."fastify_tenant_control_applications"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "fastify_tenant_control_usersToRoles" ADD CONSTRAINT "fastify_tenant_control_usersToRoles_applicationId_fastify_tenant_control_applications_id_fk" FOREIGN KEY ("applicationId") REFERENCES "public"."fastify_tenant_control_applications"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "fastify_tenant_control_usersToRoles" ADD CONSTRAINT "fastify_tenant_control_usersToRoles_roleId_fastify_tenant_control_roles_id_fk" FOREIGN KEY ("roleId") REFERENCES "public"."fastify_tenant_control_roles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "fastify_tenant_control_usersToRoles" ADD CONSTRAINT "fastify_tenant_control_usersToRoles_userId_fastify_tenant_control_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."fastify_tenant_control_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE UNIQUE INDEX IF NOT EXISTS "roles_id_index" ON "fastify_tenant_control_roles" ("id");
CREATE UNIQUE INDEX IF NOT EXISTS "users_id_index" ON "fastify_tenant_control_users" ("id");