import React, { useEffect, useState } from "react";
import {
  IoSearch,
  IoAddCircle,
 
} from "react-icons/io5";
import { fields } from "../features/providers/config/config";
import { FormProviders, TableProviders, SearchForm } from "../features/providers";
import { useFetch } from "../shared/hooks/useFetch";
import Swal from "sweetalert2";
import { DynamicForm } from "../shared/forms/components/DynamicForm";

export const ProvidersPage = () => {
  const { data, getData, loading, post, put, remove } = useFetch(
    `${import.meta.env.VITE_URL_BASE}/providers`
  );

  const [showForm, setShowForm] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [providerSelected, setProviderSelected] = useState({});
  const [providers, setProviders] = useState(data);
  const [search, setSearch] = useState("");


  useEffect(() => {
    getData();
   }, []);

  useEffect(() => {
    setProviders(data);
  }, [data]);

  useEffect(() =>{
    if(search.length > 0) {
      setProviders(data.filter((provider) => provider.empresa.toLowerCase().includes(search.toLowerCase())));
    } else {
      setProviders(data);
    }
  }, [search]);


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
        <h2 className="text-left text-3xl dark:text-white">Proveedores</h2>
        
          <button
            onClick={() => showFormProvider(false)}
            className="rounded  bg-green-500 px-2 py-2 font-bold flex gap-2 items-center text-white hover:bg-green-600 transition-colors"
          >
            Agregar Proveedor
            <IoAddCircle size={20} />
          </button>
        
      </div>


      {/* Dropdown Section */}
     <SearchForm  search={search} setSearch={setSearch} />

      <div className="relative overflow-x-auto  sm:rounded-lg  p-4 shadow-md">
       <TableProviders providers={providers} showFormProvider={showFormProvider} removeProvider={removeProvider}  />
      </div>

      {showForm && (
        <FormProviders props={{isUpdating, setShowForm, setIsUpdating, loading, post, providerSelected, put}} />
      )}
    </div>
  );
};
