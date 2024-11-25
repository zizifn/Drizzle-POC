import { sqliteTable, AnySQLiteColumn, uniqueIndex, integer, text } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const usersTable = sqliteTable("users_table", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	name: text().notNull(),
	age: integer().notNull(),
	email: text().notNull(),
	email3: text().default("").notNull(),
},
(table) => {
	return {
		emailUnique: uniqueIndex("users_table_email_unique").on(table.email),
	}
});

export const drizzleMigrations = sqliteTable("__drizzle_migrations", {
});

