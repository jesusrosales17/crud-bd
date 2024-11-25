import React, { useState } from "react";
import styles from "../styles/form.module.css";

export const DynamicForm = ({
  fields,
  onSubmit,
  onCancel,
  initialValues = {},
}) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={styles.formContainer}>
      <form className={`${styles.form} w-8/12`} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Formulario</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

        {fields.map((field) => (
          <div key={field.name} className={styles.formItem}>
            <label htmlFor={field.name}>{field.label}:</label>
            {field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                className={styles.input}
              >
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                className={styles.input}
                required={field.required}
              />
            )}
          </div>
        ))}
        </div>
        <div className={styles.buttonsContainer}>
          <button type="submit" className={styles.saveButton}>
            Guardar
          </button>
          <button
            type="button"
            onClick={onCancel}
            className={styles.cancelButton}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
