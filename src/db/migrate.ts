import "dotenv/config";
import { migrate } from "drizzle-orm/mysql2/migrator";
import { db } from "./db";

await migrate(await db(), { migrationsFolder: "./src/db/migrations" });
