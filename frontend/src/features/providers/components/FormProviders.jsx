import { useState } from "react";
import styles from "../../../shared/forms/styles/form.module.css";
import { onInputChange } from "../../../shared/forms";
import Swal from "sweetalert2";

export const FormProviders = ({ props }) => {
  const {
    isUpdating,
    setShowForm,
    setIsUpdating,
    post,
    providerSelected,
    put,
  } = props;
  const [formData, setFormData] = useState({
    empresa: providerSelected?.empresa || "",
    agente: providerSelected?.agente || "",
    celular: providerSelected?.celular || "",
    telefono: providerSelected?.telefono || "",
    direccion: providerSelected?.direccion || "",
    mail: providerSelected?.mail || "",
    cvproveedor: providerSelected?.cvproveedor || null,
    estado: providerSelected?.estado || 1
  });

  console.log(providerSelected);

  const onSubmit = (e) => {
    e.preventDefault();
    const { empresa, celular, telefono } = formData;
    if (!empresa)
      return Swal.fire(
        "Error",
        "El nombre de la empresa es obligatorio",
        "error"
      );
    if ((celular && isNaN(celular)) || (telefono && isNaN(telefono)))
      return Swal.fire(
        "Error",
        "El celular y el telefono deben ser numeros",
        "error"
      );

    if((celular && celular.length < 10) || (telefono && telefono.length < 10))
      return Swal.fire(
        "Error",
        "El celular y el telefono deben tener 10 digitos",
        "error" 
      );

    

    if (isUpdating) {
      put(formData, formData.cvproveedor);
    } else {
      post(formData);
    }

    setShowForm(false);
    setIsUpdating(false);
    setFormData({
      empresa: "",
      agente: "",
      celular: "",
      telefono: "",
      direccion: "",
      email: "",
      estado: '1'
    });
  };

  return (
    <div className={styles.formContainer}>
      <form className={`${styles.form} w-8/12 dark:bg-gray-800`} onSubmit={onSubmit}>
        <h2 className={`${styles.formTitle} dark:text-white`}>
          {isUpdating ? "Actualizar" : "Agregar"} Proveedor
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 dark:text-gray-400">
          <div className={styles.formItem}>
            <label htmlFor="empresa">Empresa:</label>
            <input
              className={`${styles.input} dark:bg-gray-500 dark:text-white dark:placeholder:text-gray-400`}
              id="empresa"
              type="text"
              value={formData.empresa}
              onChange={(e) => onInputChange(e, setFormData)}
              name="empresa"
              placeholder="Nombre de la empresa"
              required
            />
          </div>

          <div className={styles.formItem}>
            <label htmlFor="agente">Agente:</label>
            <input
              className={`${styles.input} dark:bg-gray-500 dark:text-white dark:placeholder:text-gray-400`}
              value={formData.agente}
              onChange={(e) => onInputChange(e, setFormData)}
              id="agente"
              type="text"
              name="agente"
              placeholder="Nombre del agente de la empresa"
            />
          </div>

          <div className={styles.formItem}>
            <label htmlFor="celular">Celular:</label>
            <input
              className={`${styles.input} dark:bg-gray-500 dark:text-white dark:placeholder:text-gray-400`}
              id="celular"
              type="tel"
              name="celular"
              minLength={10}
              maxLength={10}
              value={formData.celular}
              onChange={(e) => onInputChange(e, setFormData)}
              placeholder="Numero de celular"
            />
          </div>

          <div className={styles.formItem}>
            <label htmlFor="telefono">Telefono:</label>
            <input
              className={`${styles.input} dark:bg-gray-500 dark:text-white dark:placeholder:text-gray-400`}
              id="telefono"
              type="tel"
              name="telefono"
              minLength={10}
              maxLength={10}
              value={formData.telefono}
              onChange={(e) => onInputChange(e, setFormData)}
              placeholder="Numero de telefono"
            />
          </div>

          <div className={styles.formItem}>
            <label htmlFor="direccion">Direccion:</label>
            <input
              className={`${styles.input} dark:bg-gray-500 dark:text-white dark:placeholder:text-gray-400`}
              id="direccion"
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={(e) => onInputChange(e, setFormData)}
              placeholder="Dirreccion de la empresa"
            />
          </div>

          <div className={styles.formItem}>
            <label htmlFor="email">Email:</label>
            <input
              className={`${styles.input} dark:bg-gray-500 dark:text-white dark:placeholder:text-gray-400`}
              id="mail"
              type="email"
              name="mail"
              value={formData.mail}
              onChange={(e) => onInputChange(e, setFormData)}
              placeholder="Email de la empresa"
            />
          </div>

          <div className={styles.formItem}>
          <label htmlFor="estado">Estado:</label>

            <select  value={formData.estado} onChange={(e) => onInputChange(e, setFormData)} className={`${styles.input} dark:bg-gray-500 dark:text-white dark:placeholder:text-gray-400`} name="estado" id="estado">
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
            </select>
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          <button type="submit" className={styles.saveButton}>
            {isUpdating ? "Actualizar" : "Guardar"}
          </button>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className={styles.cancelButton}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
