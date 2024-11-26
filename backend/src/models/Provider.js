import db from "../config/database.js";


export const getAll = async () => {
  
    const [rows] = await db.query("SELECT * FROM proveedores");
    return rows; // Retorna todos los proveedores
  
};

export const getById = async (cvproveedor) => {
  const [results] = await db.query(
    "SELECT * FROM proveedores WHERE cvproveedor = ?",
    [cvproveedor]
  );
  return results[0]; // Retorna el primer resultado o `undefined` si no existe
};


export const create = async (provider) => {
  
    const { empresa, agente, celular, telefono, direccion, mail, estado } =
      provider;

    // Obtén el valor máximo de `cvproveedor` y suma 1
    const [results] = await db.query(
      "SELECT MAX(cvproveedor) as cvproveedor FROM proveedores"
    );
    const cvproveedor = (results[0]?.cvproveedor || 0) + 1; // Maneja el caso donde no hay registros

    // Inserta el nuevo proveedor en la base de datos
    const [result] = await db.query("INSERT INTO proveedores SET ?", {
      cvproveedor,
      empresa,
      agente,
      celular,
      telefono,
      direccion,
      mail,
      estado,
    });

    return {
      result,
      cvproveedor,
    };

};

// Actualizar un proveedor
export const update = async (cvproveedor, data) => {
  const [result] = await db.query(
    "UPDATE proveedores SET ? WHERE cvproveedor = ?",
    [data, cvproveedor]
  );
  return result; // Retorna el objeto de resultado de la consulta
};

// Eliminar un proveedor
export const remove = async (cvproveedor) => {
  const [result] = await db.query(
    "DELETE FROM proveedores WHERE cvproveedor = ?",
    [cvproveedor]
  );
  return result; // Retorna el objeto de resultado de la consulta
};
