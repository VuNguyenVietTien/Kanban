import { mysqlTable, int, varchar, serial, boolean, date } from "drizzle-orm/mysql-core";

export const StatusMasterTable = mysqlTable("status_master", {
    id: int("id").notNull().autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
})

export const UserTable = mysqlTable("users", {
    id: int("id").notNull().autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    password: varchar("password", { length: 255 }).notNull(),
})

export const UserPreferencesTable = mysqlTable("user_preferences", {
    id: int("id").notNull().autoincrement().primaryKey(),
    user_id: int("user_id").notNull().references(() => UserTable.id),
    emailUpdated: boolean("email_updated").notNull().default(false),
    oldPassword: varchar("old_password", { length: 255 }).notNull(),
})

export const TaskTable = mysqlTable("tasks", {
    id: int("id").notNull().autoincrement().primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    description: varchar("description", { length: 255 }).notNull(),
    user_id: int("user_id").notNull().references(() => UserTable.id),
    startDate: date("start_date").notNull(),
    endDate: date("end_date").notNull(),
    status: int("status").notNull().references(() => StatusMasterTable.id),
    createdAt: varchar("created_at", { length: 255 }).notNull(),
    updatedAt: varchar("updated_at", { length: 255 }).notNull(),
})

export const TaskCommentTable = mysqlTable("task_comments", {
    id: int("id").notNull().autoincrement().primaryKey(),
    task_id: int("task_id").notNull().references(() => TaskTable.id),
    user_id: int("user_id").notNull().references(() => UserTable.id),
    comment: varchar("comment", { length: 255 }).notNull(),
    createdAt: varchar("created_at", { length: 255 }).notNull(),
    updatedAt: varchar("updated_at", { length: 255 }).notNull(),
})