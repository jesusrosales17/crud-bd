import mysql from "mysql2/promise.js"
import dotenv from "dotenv";

dotenv.config();
let db;
try {
     
     db = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })
} catch (error) {
 throw new Error('base de datos no conectada')
} 

// await db.connect(error => {
//     if(error) {
//         console.error("Error:", error)
//     } else {
//         console.log("Database conected")
//     }
// }) 

export default db;