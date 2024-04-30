import { Mode } from "drizzle-orm/mysql-core";
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./schema";
import mysql from "mysql2/promise";

// async function db() {
//   const mode: Mode = "default";
//   const connection = await mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE_NAME,
//     port: Number(process.env.DATABASE_PORT),
//   });
//   return drizzle(connection, { schema, mode });
// }

// export { db };

const mode: Mode = "default";
export const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DATABASE_PORT),
});
export const db = drizzle(connection, { schema, mode });
