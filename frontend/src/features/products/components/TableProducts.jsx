import React from 'react'
import { IoPencilOutline, IoTrashOutline } from 'react-icons/io5'

export const TableProducts = ({ products, showFormProducts, removeProvider }) => {
  console.log(products)
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr className="text-center">
          <th scope="col" className="px-6 py-3">
            Nombre
          </th>
          <th scope="col" className="px-6 py-3">
            Departamento
          </th>
          <th scope="col" className="px-6 py-3">
            Existencias
          </th>
          <th scope="col" className="px-6 py-3">
            PrecioV
          </th>
          <th scope="col" className="px-6 py-3">
            PrecioVO
          </th>
          <th scope="col" className="px-6 py-3">
            PrecioC
          </th>
          <th scope="col" className="px-6 py-3">
            Oferta
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
          products.length > 0 ?
            (
              products.map((products) => (
                // cvproducto - cvproducto
                <tr key={products.cvproducto} className="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                  <td className="px-6 py-4">{products.nombre || "-"}</td>
                  <td className="px-6 py-4">{products.departamento || "-"}</td>
                  <td className="px-6 py-4">{products.existencias || "-"}</td>
                  <td className="px-6 py-4">{products.preciov || "-"}</td>
                  <td className="px-6 py-4">{products.preciovo || "-"}</td>
                  <td className="px-6 py-4">{products.precioc || "-"}</td>
                  <td
                    className={`px-6 py-4}`}

                  >
                    {products.oferta == 1 ? "No" : "Si" ?? "-"}
                  </td>
                  <td
                    className={`px-6 py-4 ${products.estado == 1
                        ? "text-green-500"
                        : "text-red-500"
                      }`}


                  >
                    {products.estado == 1 ? "Activo" : "Inactivo" ?? "-"}
                  </td>
                  <td className="flex flex-col items-center px-6 py-4 gap-3">
                    <button
                      onClick={() => showFormProducts(true, products)}
                      className="font-medium border p-1 rounded-md w-full text-center bg-blue-600 text-white border-blue-300 flex gap-2 items-center  dark:text-blue-500 hover:underline"
                    >
                      <IoPencilOutline />
                      Editar
                    </button>
                    <button
                      onClick={() => removeproducts(products.cvproveedor)}
                      className="font-medium border p-1 rounded-md w-full text-center bg-red-600 text-white flex gap-2 items-center  dark:text-red-500 hover:underline "
                    >
                      <IoTrashOutline />
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )
            : (
              <tr className="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td colSpan={7} className="px-6 py-4">No hay productos</td>
              </tr>
            )
        }
      </tbody>
    </table>
  )
}

