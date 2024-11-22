import React from 'react'
import { IoPencilOutline, IoTrashOutline } from 'react-icons/io5'

export const TableProviders = ({providers, showFormProvider}) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
    {
        providers.length > 0 ?
        (
            providers.map((provider) => (
                <tr key={provider.cvproveedor} className="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td
                    scope="row"
                    className="px-6 py-4"
                  >
                    {provider.empresa}
                  </td>
                  <td className="px-6 py-4">{provider.agente || "-"}</td>
                  <td className="px-6 py-4">{provider.celular || "-"}</td>
                  <td className="px-6 py-4">{provider.telefono || "-"}</td>
                  <td className="px-6 py-4">{provider.direccion || "-"}</td>
                  <td className="px-6 py-4">{provider.mail || "-"}</td>
                  <td
                    className={`px-6 py-4 ${
                      provider.estado == 1
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                 
                     
                  >
                    {provider.estado == 1 ? "Activo" : "Inactivo" ?? "-"}
                  </td>
                  <td className="flex flex-col items-center px-6 py-4 gap-3">
                    <button
                      onClick={() => showFormProvider(true, provider)}
                      className="font-medium border p-1 rounded-md w-full text-center bg-blue-600 text-white border-blue-300 flex gap-2 items-center  dark:text-blue-500 hover:underline"
                    >
                      <IoPencilOutline />
                      Editar
                    </button>
                    <a
                      href="#"
                      className="font-medium border p-1 rounded-md w-full text-center bg-red-600 text-white flex gap-2 items-center  dark:text-red-500 hover:underline "
                    >
                      <IoTrashOutline />
                      Eliminar
                    </a>
                  </td>
                </tr>
              ))
        )
        : (
            <tr className="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td colSpan={7} className="px-6 py-4">No hay proveedores</td>
            </tr>
        )
    }
    </tbody>
  </table>
  )
}

