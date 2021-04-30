const path = require('path');

const envPath = path.resolve(process.cwd(), '.env.local');
require('dotenv').config({ path: envPath });
const mysql = require('mysql2');

// const db = mysql({
//   config: {
//     host: process.env.MYSQL_HOST,
//     database: process.env.MYSQL_DATABASE,
//     user: process.env.MYSQL_USERNAME,
//     password: process.env.MYSQL_PASSWORD,
//     port: process.env.MYSQL_PORT,
//   },
// })

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
});

// Create "entries" table if doesn't exist
function migrate() {
  try {
    connection.query(`
    CREATE TABLE IF NOT EXISTS entries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at 
        TIMESTAMP 
        NOT NULL 
        DEFAULT CURRENT_TIMESTAMP 
        ON UPDATE CURRENT_TIMESTAMP
    )
    `);
    console.log('migration ran successfully');
    connection.end();
  } catch (e) {
    console.error('could not run migration, double check your credentials.');
    process.exit(1);
  }
}

migrate();
