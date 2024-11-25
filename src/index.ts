import 'dotenv/config';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './db/schema';

// const sqlite = new Database();
// const db = drizzle(process.env.DATABASE_URL!);
const db = drizzle({
    connection: {   
        source: process.env.DB_FILE_NAME!
    },
    schema
});

async function main() {
    const result = await db.query.usersTable.findMany();
    // const result = await db.select().from(usersTable);
    console.log(result);
}


main()


