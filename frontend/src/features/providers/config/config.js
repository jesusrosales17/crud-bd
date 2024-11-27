export const fields = [
    { name: "empresa", label: "Empresa", type: "text", placeholder: "Nombre de la empresa", required: true },
    { name: "agente", label: "Agente", type: "text", placeholder: "Nombre del agente" },
    { name: "celular", label: "Celular", type: "tel", placeholder: "Número de celular" },
    { name: "telefono", label: "Teléfono", type: "tel", placeholder: "Número de teléfono" },
    { name: "direccion", label: "Dirección", type: "text", placeholder: "Dirección de la empresa" },
    { name: "mail", label: "Email", type: "email", placeholder: "Correo electrónico" },
    {
      name: "estado",
      label: "Estado",
      type: "select",
      options: [
        { value: "1", label: "Activo" },
        { value: "2", label: "Inactivo" },
      ],
    },
  ];
  