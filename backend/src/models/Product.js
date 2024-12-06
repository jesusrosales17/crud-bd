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

  

  // Eliminar un producto
export const remove = async (cvproducto) => {
  const [result] = await db.query(
    "CALL deleteProduct(?)",
    [cvproducto]
  );
  return result; // Retorna el objeto de resultado de la consulta
};
export const create = async (product) => {
  
  const {nombre, departamento, existencias, preciov, preciovo, precioc, oferta, estado  } =
    product;

  // Obtén el valor máximo de `cvproveedor` y suma 1
  const [results] = await db.query(
    "SELECT MAX(cvproducto) as cvproducto FROM productos"
  );
  const cvproducto = (results[0]?.cvproducto|| 0) + 1; // Maneja el caso donde no hay registros

  // Inserta el nuevo proveedor en la base de datos
  const [result] = await db.query("INSERT INTO productos SET ?", {
    cvproducto, nombre, departamento, existencias, preciov, preciovo, precioc, oferta, estado
  });

  return {
    result,
    cvproducto,
  };

};