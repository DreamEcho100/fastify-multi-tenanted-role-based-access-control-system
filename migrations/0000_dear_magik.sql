CREATE TABLE IF NOT EXISTS "ftc_applications" (
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "ftc_roles" (
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"application_id" varchar,
	"permissions" text[],
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "ftc_users" (
	"id" varchar PRIMARY KEY NOT NULL,
	"email" varchar(256) NOT NULL,
	"name" varchar(256) NOT NULL,
	"application_id" varchar,
	"password" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "ftc_users_to_roles" (
	"application_id" varchar NOT NULL,
	"role_id" varchar NOT NULL,
	"user_id" varchar NOT NULL,
	CONSTRAINT "ftc_users_to_roles_application_id_role_id_user_id_pk" PRIMARY KEY("application_id","role_id","user_id")
);

DO $$ BEGIN
 ALTER TABLE "ftc_roles" ADD CONSTRAINT "ftc_roles_application_id_ftc_applications_id_fk" FOREIGN KEY ("application_id") REFERENCES "public"."ftc_applications"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ftc_users" ADD CONSTRAINT "ftc_users_application_id_ftc_applications_id_fk" FOREIGN KEY ("application_id") REFERENCES "public"."ftc_applications"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ftc_users_to_roles" ADD CONSTRAINT "ftc_users_to_roles_application_id_ftc_applications_id_fk" FOREIGN KEY ("application_id") REFERENCES "public"."ftc_applications"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ftc_users_to_roles" ADD CONSTRAINT "ftc_users_to_roles_role_id_ftc_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."ftc_roles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ftc_users_to_roles" ADD CONSTRAINT "ftc_users_to_roles_user_id_ftc_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."ftc_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE UNIQUE INDEX IF NOT EXISTS "ftc_roles_name_application_id_index" ON "ftc_roles" ("name","application_id");
CREATE UNIQUE INDEX IF NOT EXISTS "ftc_users_email_application_id_index" ON "ftc_users" ("email","application_id");