import { useState } from "react";
import styles from "../../../shared/forms/styles/form.module.css";
import { onInputChange } from "../../../shared/forms";
import Swal from "sweetalert2";

export const FormProducts = ({ props }) => {
    const {
        isUpdating,
        setShowForm,
        setIsUpdating,
        post,
        productSelected,
        put,
    } = props;
    const [formData, setFormData] = useState({
        nombre: productSelected?.nombre || "",
        departamento: productSelected?.departamento || "",
        existencias: productSelected?.existencias || "",
        preciov: productSelected?.preciov || "",
        preciovo: productSelected?.preciovo || "",
        precioc: productSelected?.precioc || "",
        cvproducto: productSelected?.cvproducto || null,
        estado: productSelected?.estado || 1,
        oferta: productSelected?.oferta || 1
    });

    console.log(formData);

    const onSubmit = (e) => {
        e.preventDefault();
        const {   nombre,
            departamento,
            existencias,
            preciov,
            preciovo,
            precioc,
            cvproducto,
            estado,
            oferta } = formData;

            if(isUpdating && !cvproducto) {
                return Swal.fire(
                    "Error",
                    "el id es obligatorio",
                    "error"
                );
            }
        if (!nombre.trim() || !departamento.trim() || !existencias || !preciov || !preciovo|| !precioc || !estado || !oferta)
            
            return Swal.fire(
                "Error",
                "Todos los campos son obligatorios",
                "error"
            );
        if ((existencias && isNaN(existencias) || (preciov && isNaN(preciov))) || (preciovo && isNaN(preciovo)) || (precioc && isNaN(precioc)) || (estado && isNaN(estado)) || (oferta && isNaN(oferta)))
            return Swal.fire(
                "Error",
                "Las existencias, los precios, el estado y la oferta deben ser numeros",
                "error"
            );
        
        if(Number(existencias) < 0 || Number(precioc) < 0 || Number(preciov) < 0 || Number(preciovo) < 0) {
            console.log(exis < 0)
            return Swal.fire(
                "Error",
                "Los precios deben ser mayor o igual a 0",
                "error"
            );
        
        }

        if (isUpdating) {
            put(formData, formData.cvproducto);
        } else {
            post(formData);
        }

        setShowForm(false);
        setIsUpdating(false);
        setFormData({
            nombre: "",
            departamento: "",
            existencias: "",
            preciov: "",
            preciovo: "",
            precioc: "",
            oferta: "",
            estado: ""
        });
    };

    return (
        <div className={styles.formContainer}>
            <form className={`${styles.form} w-8/12 dark:bg-gray-800`} onSubmit={onSubmit}>
                <h2 className={`${styles.formTitle} dark:text-white`}>
                    {isUpdating ? "Actualizar" : "Agregar"} Producto
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3  dark:text-gray-400">
                    <div className={styles.formItem}>
                        <label htmlFor="nombre">nombre:</label>
                        <input
                            className={`${styles.input} dark:bg-gray-500 dark:text-white dark:placeholder:text-gray-400`}
                            id="nombre"
                            type="text"
                            value={formData.nombre}
                            onChange={(e) => onInputChange(e, setFormData)}
                            name="nombre"
                            placeholder="Nombre del producto"
                            required
                        />
                    </div>

                    <div className={styles.formItem}>
                        <label htmlFor="departamento">departamento:</label>
                        <input
                            className={`${styles.input} dark:bg-gray-500 dark:text-white dark:placeholder:text-gray-400`}
                            value={formData.departamento}
                            onChange={(e) => onInputChange(e, setFormData)}
                            id="departamento"
                            type="text"
                            name="departamento"
                            placeholder="Nombre del departamento del producto"
                        />
                    </div>

                    <div className={styles.formItem}>
                        <label htmlFor="existencias">existencias:</label>
                        <input
                            className={`${styles.input} dark:bg-gray-500 dark:text-white dark:placeholder:text-gray-400`}
                            id="existencias"
                            type="number"
                            name="existencias"
                            min={0}
                            value={formData.existencias}
                            onChange={(e) => onInputChange(e, setFormData)}
                            placeholder="Numero de existencias"
                        />
                    </div>

                    <div className={styles.formItem}>
                        <label htmlFor="preciov">Precio Venta:</label>
                        <input
                            className={`${styles.input} dark:bg-gray-500 dark:text-white dark:placeholder:text-gray-400`}
                            id="preciov"
                            type="number"
                            name="preciov"
                            min={0}
                            value={formData.preciov}
                            onChange={(e) => onInputChange(e, setFormData)}
                            placeholder="Numero de precio venta"
                        />
                    </div>

                    <div className={styles.formItem}>
                        <label htmlFor="preciovo">Precio Venta en oferta:</label>
                        <input
                            className={`${styles.input} dark:bg-gray-500 dark:text-white dark:placeholder:text-gray-400`}
                            id="preciovo"
                            type="number"
                            min={0}
                            name="preciovo"
                            value={formData.preciovo}
                            onChange={(e) => onInputChange(e, setFormData)}
                            placeholder="Precio venta en oferta"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label htmlFor="precioc">Precio de Compra:</label>
                        <input
                            className={`${styles.input} dark:bg-gray-500 dark:text-white dark:placeholder:text-gray-400`}
                            id="precioc"
                            type="number"
                            min={0}
                            name="precioc"
                            value={formData.precioc}
                            onChange={(e) => onInputChange(e, setFormData)}
                            placeholder="Precio de compra"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label htmlFor="oferta">Oferta:</label>

                        <select value={formData.oferta} onChange={(e) => onInputChange(e, setFormData)} className={`${styles.input} dark:bg-gray-500 dark:text-white dark:placeholder:text-gray-400`} name="oferta" id="oferta">
                            <option value="1">No</option>
                            <option value="2">Si</option>
                        </select>
                    </div>

                    <div className={styles.formItem}>
                        <label htmlFor="estado">Estado:</label>

                        <select value={formData.estado} onChange={(e) => onInputChange(e, setFormData)} className={`${styles.input} dark:bg-gray-500 dark:text-white dark:placeholder:text-gray-400`} name="estado" id="estado">
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
