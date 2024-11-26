import db from "../config/database.js";


export const getAll = async () => {
  
    const [rows] = await db.query("SELECT * FROM productos");
    return rows; // Retorna todos los productos
  
};