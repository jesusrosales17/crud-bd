
import * as productsModel from "../models/Product.js";


export const getProducts = async (req, res) => {
    try {
    const products = await productsModel.getAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message ?? "Ocurrió un error al obtener los productos" });
  }
};

export const deleteProducts = async (req, res) => {
    const { cvproducto } = req.params;

    if (!cvproducto || isNaN(cvproducto)) {
      return res.status(400).send({
        message: "El id del producto es obligatorio y debe ser un número",
      });
    }
  
    try {
      // Verificar si el producto existe
      const existingProduct = await productsModel.getById(cvproducto);
      if (!existingProduct) {
        return res.status(404).send({
          message: "Producto no encontrado",
        });
      }
  
      // Eliminar el producto
      const result = await productsModel.remove(cvproducto);

  
      if (result.affectedRows === 0 ) {
        return res.status(500).send({
          message: "Ocurrió un error al eliminar el producto",
        });
      }
  
      return res.status(200).send({
        message: "Producto eliminado correctamente",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        message: error.message ?? "Ocurrió un error al eliminar el producto",
      });
    }

}


export const updateProducts = async (req, res) => {
    const { nombre, departamento, existencias, preciov, preciovo, precioc, oferta, estado } = req.body;
    const { cvproducto } = req.params;
    if (!cvproducto || isNaN(cvproducto)) {
        return res.status(400).send({
            menssage: "El id del producto es obligatorio y debe de ser un numero",
        });
    }
    if (!nombre) {
        return res.status(400).send({
            menssage: "El nombre del producto es obligatorio",
        });
    }

    if (!departamento) {
        return res.status(400).send({
            menssage: "La marca del producto es obligatorio",
        });
    }
    if (!existencias) {
        return res.status(400).send({
            menssage: "El numero de las existencias",
        });
    }
    if ((preciov && isNaN(preciov)) || (preciovo && isNaN(preciovo)) || (precioc && isNaN(precioc) || (precioc && isNaN(existencias)))) {
        return res.status(400).send({
            menssage: "Los precios de los productos deben de ser valores númericos",
        });
    }
    if (oferta != 1 && oferta != 2) {
        return res.status(400).send({
            menssage: "La oferta debe de ser 1(No) o 2 (Si)",
        });
    }
    if (estado != 1 && estado != 2) {
        return res.status(400).send({
            menssage: "El estado debe de ser 1(Activo) o 2 (Inactivo)",
        });
    }

    try {
        // Verificar si el producto existe
        const existingProvider = await productsModel.getById(cvproducto);
        if (!existingProvider) {
            return res.status(404).send({
                message: "Producto no encontrado",
            });
        }
    
        // Actualizar el producto
        const result = await productsModel.update(cvproducto, req.body);
    
        if (result.affectedRows === 0) {
            return res.status(500).send({
                message: "Ocurrió un error al actualizar el producto",
            });
        }
    
        return res.status(200).send({
            message: "Producto actualizado correctamente",
            producto: {
                cvproducto, nombre, departamento, existencias, preciov, preciovo, precioc, oferta, estado
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: error.message ?? "Ocurrió un error al actualizar el producto",
            error: error
        });
    };
}

export const createProducts = async (req, res) => {
  const { nombre, departamento, existencias, preciov, preciovo, precioc, oferta, estado } = req.body;

  console.log(req.body)
 
  if (!nombre  || !departamento || !existencias || !preciov || !preciovo || !precioc || !oferta || !estado) {
      return res.status(400).send({
          menssage: "Todos los campos son obligatorios",
      });
  }

  if ((preciov && isNaN(preciov)) || (preciovo && isNaN(preciovo)) || (precioc && isNaN(precioc) || (precioc && isNaN(existencias)))) {
      return res.status(400).send({
          menssage: "Los precios de los productos deben de ser valores númericos",
      });
  }
  if (oferta != 1 && oferta != 2) {
      return res.status(400).send({
          menssage: "La oferta debe de ser 1(No) o 2 (Si)",
      });
  }
  if (estado != 1 && estado != 2) {
      return res.status(400).send({
          menssage: "El estado debe de ser 1(Activo) o 2 (Inactivo)",
      });
  }

  try {
      
  
      // Actualizar el producto
      const response= await productsModel.create(req.body);
      const {cvproducto,result}=response;
  
      if (result.affectedRows === 0) {
          return res.status(500).send({
              message: "Ocurrió un error al crear el producto",
          });
      }
  
      return res.status(200).send({
          message: "Producto creado correctamente",
          data: {
              cvproducto, nombre, departamento, existencias, preciov, preciovo, precioc, oferta, estado
          },
      });
  } catch (error) {
      console.error(error);
      return res.status(500).send({
          message: error.menssage ?? "Ocurrió un error al crear el producto",
          error: error
      });
  };
}



