import db from "../config/database.js";

export const getAllProviders = async (req, res) => {
  const [results] = await db.query("SELECT * FROM proveedores");
  res.send(results);
};
