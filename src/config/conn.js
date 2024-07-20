import mysql from "mysql2"
import "dotenv/config"

 const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
 });

 conn.connect((err) => {
   if(err) {
      return console.error(err.stack)
   }
   console.log("Mysql conectado")
     }); 
 
export default conn;