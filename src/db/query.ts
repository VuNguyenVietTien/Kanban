import { int } from 'drizzle-orm/mysql-core';
import { db } from "./db";
import { UserTable } from "./schema";
import { eq } from 'drizzle-orm';

async function getAllUser() {
    const result = await db.select().from(UserTable);
    console.log(result);
}

async function insertUser() {
    const result = await db.insert(UserTable).values({ name: "test", email: "test@gmail.com", password: "test" });
    console.log(result);
}

async function updateUser(id: number) {
    const result = await db.update(UserTable).set({ name: "test2" }).where(eq(UserTable.id, id));
    console.log(result);
}

async function deleteUser(id: number) {
    const result = await db.delete(UserTable).where(eq(UserTable.id, id));
    console.log(result);
}

async function getUserById(id: number) {
    const result = await db.select().from(UserTable).where(eq(UserTable.id, id));
    console.log(result);
}

export { getAllUser, insertUser, updateUser, deleteUser, getUserById }