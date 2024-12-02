import db from "../config/database.js";


export const getAll = async () => {
  
    const [rows] = await db.query("SELECT * FROM productos");
    return rows; // Retorna todos los productos
  
};
// Actualizar un producto
export const update = async (cvproducto, data) => {
    const [result] = await db.query(
      "UPDATE productos SET ? WHERE cvproducto = ?",
      [data, cvproducto]
    );
    return result; // Retorna el objeto de resultado de la consulta
  };

  export const getById = async (cvproducto) => {
    const [results] = await db.query(
      "SELECT * FROM productos WHERE cvproducto = ?",
      [cvproducto]
    );
    return results[0]; // Retorna el primer resultado o `undefined` si no existe
  };