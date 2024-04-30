import 'dotenv/config';
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/db/schema.ts",
    out: "./src/db/migrations",
    driver: "mysql2",
    dbCredentials:{
        // uri: process.env.DATABASE_URL as string,
        host: process.env.DATABASE_HOST as string,
        user: process.env.DATABASE_USER as string,
        password: process.env.DATABASE_PASSWORD as string,
        database: process.env.DATABASE_NAME as string,
        port: Number(process.env.DATABASE_PORT),
    },
    verbose: true,
    strict: true,
})