
import * as providerModel from "../models/Provider.js";


export const getProviders = async (req, res) => {
  try {
    const providers = await providerModel.getAll();
    res.status(200).json(providers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProvider = async (req, res) => {
  const { empresa, agente, celular, telefono, direccion, mail, estado } = req.body;



  if (!empresa || !estado) {
    return res.status(400).send({
      message: "El nombre de la empresa y el estado  es obligatorio",
    });
  }

  if(estado != 1 && estado != 2) {
    console.log(estado)
    return res.status(400).send({
      message: "El estado debe ser Activo o Inactivo",
    });
  }

  if ((celular && isNaN(celular)) || (telefono && isNaN(telefono))) {
    return res.status(400).send({
      message: "El celular y el telefono deben ser numeros",
    });
  }



 

  try {
    // optener el ultimo id para asignarlo al proveedor
    const response = await providerModel.create(req.body);

    const { cvproveedor } = response;

    if(response.result.affectedRows === 0) {
      return res.status(500).send({
        message: "Ocurrio un error al guardar el proveedor",
      });
    }

    

    return res.status(200).send({
      message: "Proveedor guardado correctamente",
      proveedor: {
        cvproveedor,
        empresa,
        agente,
        celular,
        telefono,
        direccion,
        mail,
        estado
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error al guardar el proveedor",
    });
  }
};


export const updateProvider = async (req, res) => {
  const { empresa, agente, celular, telefono, direccion, mail, estado } = req.body;
  const { cvproveedor } = req.params;

  if (!cvproveedor || isNaN(cvproveedor)) {
    return res.status(400).send({
      message: "El id del proveedor es obligatorio y debe ser un número",
    });
  }

  if (estado != 1 && estado != 2) {
    return res.status(400).send({
      message: "El estado debe ser 1 (Activo) o 2 (Inactivo)",
    });
  }

  if (!empresa) {
    return res.status(400).send({
      message: "El nombre de la empresa es obligatorio",
    });
  }

  if ((celular && isNaN(celular)) || (telefono && isNaN(telefono))) {
    return res.status(400).send({
      message: "Celular y Teléfono deben ser valores numéricos",
    });
  }

  try {
    // Verificar si el proveedor existe
    const existingProvider = await providerModel.getById(cvproveedor);
    if (!existingProvider) {
      return res.status(404).send({
        message: "Proveedor no encontrado",
      });
    }

    // Actualizar el proveedor
    const result = await providerModel.update(cvproveedor, {
      empresa,
      agente,
      celular,
      telefono,
      direccion,
      mail,
      estado,
    });

    if (result.affectedRows === 0) {
      return res.status(500).send({
        message: "Ocurrió un error al actualizar el proveedor",
      });
    }

    return res.status(200).send({
      message: "Proveedor actualizado correctamente",
      proveedor: {
        cvproveedor,
        empresa,
        agente,
        celular,
        telefono,
        direccion,
        mail,
        estado,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Error interno del servidor",
    });
  }
};

export const deleteProvider = async (req, res) => {
  const { cvproveedor } = req.params;

  if (!cvproveedor || isNaN(cvproveedor)) {
    return res.status(400).send({
      message: "El id del proveedor es obligatorio y debe ser un número",
    });
  }

  try {
    // Verificar si el proveedor existe
    const existingProvider = await providerModel.getById(cvproveedor);
    if (!existingProvider) {
      return res.status(404).send({
        message: "Proveedor no encontrado",
      });
    }

    // Eliminar el proveedor
    const result = await providerModel.remove(cvproveedor);

    if (result.affectedRows === 0) {
      return res.status(500).send({
        message: "Ocurrió un error al eliminar el proveedor",
      });
    }

    return res.status(200).send({
      message: "Proveedor eliminado correctamente",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Error interno del servidor",
    });
  }
};
