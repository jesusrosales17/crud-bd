import React, { useEffect, useState } from "react";
import {
  IoSearch,
  IoAddCircle,
 
} from "react-icons/io5";
import { FormProviders, TableProviders } from "../features/providers";
import { useFetch } from "../shared/hooks/useFetch";
import Swal from "sweetalert2";

export const ProvidersPage = () => {
  const { data, getData, loading, post, put, remove } = useFetch(
    `${import.meta.env.VITE_URL_BASE}/providers`
  );

  const [showForm, setShowForm] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [providerSelected, setProviderSelected] = useState({});

  useEffect(() => {
    getData();
  }, []);


  const showFormProvider = (update, provider = {
    empresa: "",
    agente: "",
    celular: "",
    telefono: "",
    direccion: "",
    mail: "",
  }) => {
    setShowForm(true);
    setProviderSelected(provider);
    setIsUpdating(update);
  };

  const removeProvider = (id) => {
    
    Swal.fire({
      title: "¿Estas seguro de eliminar el proveedor?",
      text: "No se podra revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        remove(id);
       
      }
    });
  }




  

  return (
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-center mt-5 ">
        <h2 className="text-left text-3xl">Proveedores</h2>
        
          <button
            onClick={() => showFormProvider(false)}
            className="rounded border bg-green-500 px-2 py-2 font-bold flex gap-2 items-center text-white hover:bg-green-600 transition-colors"
          >
            Agregar Proveedor
            <IoAddCircle size={20} />
          </button>
        
      </div>


      {/* Dropdown Section */}
      <div className="relative  mt-10 sm:rounded-lg">
        <div className="flex flex-col  sm:flex-row  space-y-4 sm:space-y-0 items-center justify-end pb-4">
          {/* Search Bar */}
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
              <IoSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Buscar proveedor"
            />
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto  sm:rounded-lg bg-white p-4 shadow-md">
       <TableProviders providers={data} showFormProvider={showFormProvider} removeProvider={removeProvider}  />
      </div>

      {showForm && (
        <FormProviders props={{isUpdating, setShowForm, setIsUpdating, loading, post, providerSelected, put}} />
      )}
    </div>
  );
};
