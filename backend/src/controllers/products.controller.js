import db from "../config/database.js";

export const getProducts = async (req, res) => {
    const [results] = await db.query("SELECT * FROM productos");
    res.send(results); 
};

export const deleteProducts =  async (req, res) => {
    res.send("Eliminando productos")
}
export const addProduct = async (req, res) => {
    const {nombre, marca, existencias,precioc, oferta}= req.body;
    


    

    
    
}