import React from "react";
import { IoPencilOutline, IoTrashOutline } from "react-icons/io5";

export const TableProviders = ({
  providers,
  showFormProvider,
  removeProvider,
}) => {
  return (
    <table
      className={`w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400`}
    >
      <thead
        className={`text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100`}
      >
        <tr className="text-center">
          <th scope="col" className="px-6 py-3">
            Empresa
          </th>
          <th scope="col" className="px-6 py-3">
            Agente
          </th>
          <th scope="col" className="px-6 py-3">
            Celular
          </th>
          <th scope="col" className="px-6 py-3">
            Telefono
          </th>
          <th scope="col" className="px-6 py-3">
            Direccion
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Estado
          </th>

          <th scope="col" className="px-6 py-3">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {providers.length > 0 ? (
          providers.map((provider) => (
            <tr
              key={provider.cvproveedor}
              className="bg-trasparent border-b text-center  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td scope="row" className="px-6 py-4 dark:text-gray-200">
                {provider.empresa}
              </td>
              <td className="px-6 py-4 dark:text-gray-200">
                {provider.agente || "-"}
              </td>
              <td className="px-6 py-4 dark:text-gray-200">
                {provider.celular || "-"}
              </td>
              <td className="px-6 py-4 dark:text-gray-200">
                {provider.telefono || "-"}
              </td>
              <td className="px-6 py-4 dark:text-gray-200">
                {provider.direccion || "-"}
              </td>
              <td className="px-6 py-4 dark:text-gray-200">
                {provider.mail || "-"}
              </td>
              <td
                
              >
                <p className={`inline px-1 rounded text-black dark:text-neutral-700 ${
                  provider.estado == 1 ? " bg-green-300" : "bg-red-300"
                }`}>
                {provider.estado == 1 ? "Activo" : "Inactivo" ?? "-"}
                </p>
              </td>
              <td className="flex flex-col items-center px-6 py-4 gap-3">
                <button
                  onClick={() => showFormProvider(true, provider)}
                  className="font-medium  p-1 rounded-md w-full text-center bg-blue-600 text-white border-blue-300 flex gap-2 items-center   hover:underline"
                >
                  <IoPencilOutline />
                  Editar
                </button>
                <button
                  onClick={() => removeProvider(provider.cvproveedor)}
                  className="font-medium  p-1 rounded-md w-full text-center bg-red-600 text-white flex gap-2 items-center   hover:underline "
                >
                  <IoTrashOutline />
                  Eliminar
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr className="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td colSpan={8} className="px-6 py-4">
              No hay proveedores
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
