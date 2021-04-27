const path = require('path')
const envPath = path.resolve(process.cwd(), '.env.local')
require('dotenv').config({ path: envPath })

const mysql = require('mysql2');

export async function query(q,values) {

  const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE
  });
  
  try {
    const results = connection.promise().query(q , values).then(([rows,fields]) => { return rows; });
    connection.end();
    return results;
  } catch (e) {
    throw Error(e.message)
  }
}
