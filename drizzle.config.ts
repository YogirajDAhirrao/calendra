import { defineConfig } from "drizzle-kit";
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("Database Url is not defined in env");
}

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations.ts",
  dialect: "postgresql",
  strict: true,
  verbose: true,
  dbCredentials: {
    url: databaseUrl,
  },
});
