import db from "../config/database.js";
export const getAllProviders = async (req, res) => {
  const [results] = await db.query("SELECT * FROM proveedores");
  res.send(results);
};

export const addProvider = async (req, res) => {
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
    const [results] = await db.query(
      "SELECT MAX(cvproveedor) as cvproveedor  FROM proveedores"
    );
    const cvproveedor = results[0].cvproveedor + 1;
    
    const result = await db.query("INSERT INTO proveedores SET ?", {
      cvproveedor,
      empresa,
      agente,
      celular,
      telefono,
      direccion,
      mail,
      estado
    });

    if (result.affectedRows === 0) {
      return res.status(404).send({
        message: "ocurrio un error al guardar el proveedor",
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

  if(isNaN(cvproveedor))  return res.status(400).send({
    message: "El id deve de ser un numero"
  })


  if (!cvproveedor) {
    return res.status(400).send({
      message: "El id del proveedor es obligatorio",
    });
  }

  if(estado != 1 && estado != 2) {
    return res.status(400).send({
      message: "El estado debe ser Activo o Inactivo",
    });
  }

  
  if (!empresa) {
    return res.status(400).send({
      message: "El nombre de la empresa es obligatoria",
    });
  }

  if (isNaN(celular) || isNaN(telefono)) {
    return res.status(400).send({
      message: "Celular y Telefono deben ser numericos",
    });
  }

  // verificar si existe el proveedor
  const [results] = await db.query(
    "SELECT cvproveedor FROM proveedores WHERE cvproveedor = ?",
    [cvproveedor]
  );
  if (results.length === 0) {
    return res.status(404).send({
      message: "Proveedor no encontrado",
    });
  }


  try {
    // optener el ultimo id para asignarlo al proveedor

    const result = await db.query(
      "UPDATE proveedores SET ? WHERE cvproveedor = ?",
      [{ empresa, agente, celular, telefono, direccion, mail, estado }, cvproveedor]
    );

    if (result.affectedRows === 0) {
      return res.status(404).send({
        message: "ocurrio un error al actualizar el proveedor",
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
        estado
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error al actualizar el proveedor",
    });
  }
};

export const deleteProvider = async (req, res) => {
  const { cvproveedor } = req.params;

  if (!cvproveedor) {
    return res.status(400).send({
      message: "El id del proveedor es obligatorio",
    });
  }

  // verificar si existe el proveedor
  const [results] = await db.query(
    "SELECT cvproveedor FROM proveedores WHERE cvproveedor = ?",
    [cvproveedor]
  );
  if (results.length === 0) {
    return res.status(404).send({
      message: "Proveedor no encontrado",
    });
  }

  try {
    await db.query("DELETE FROM proveedores WHERE cvproveedor = ?", [cvproveedor]);

    if (result.affectedRows === 0) {
      return res.status(404).send({
        message: "ocurrio un error al eliminar el proveedor",
      });
    }

    return res.status(200).send({
      message: "Proveedor eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
        message: "Error al eliminar el proveedor",
    })
  }
};