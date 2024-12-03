import React, { useEffect, useState } from "react";
import {
  IoSearch,
  IoAddCircle,
  IoCloudyNight,
 
} from "react-icons/io5";
import { useFetch } from "../shared/hooks/useFetch";
import Swal from "sweetalert2";
import { DynamicForm } from "../shared/forms/components/DynamicForm";
import { TableProducts } from "../features/products/components/TableProducts";
import { SearchForm } from "../shared/forms/components/SearchForm";
import { FormProducts } from "../features/products/components/FormProducts";

export const ProductsPage = () => {
  const { data, getData, loading, post, put, remove } = useFetch(
    `${import.meta.env.VITE_URL_BASE}/products`
  );


  const [showForm, setShowForm] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [productSelected, setProductSelected] = useState({});
  const [products, setProducts] = useState(data);
  const [search, setSearch] = useState("");


  useEffect(() => {
    getData();
   }, []);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  useEffect(() =>{
    if(search.length > 0) {
      setProducts(data.filter((provider) => provider.nombre.toLowerCase().includes(search.toLowerCase())));
    } else {
      setProducts(data);
    }
  }, [search]);

  const showFormProducts = (update, product = {
    nombre: "",
    departamento: "",
    existencias: "",
    preciov: "",
    preciovo: "",
    precioc: "",
    oferta: "",
    estado: ""
  }) => {
    console.log(product)
    setShowForm(true);
    setProductSelected(product);
    setIsUpdating(update);
  };

  const removeProduct = (id) => {
    
    Swal.fire({
      title: "¿Estas seguro de eliminar el producto?",
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
        <h2 className="text-left text-3xl">Productos</h2>
        
          <button
            onClick={() => showFormProducts(false)}
            className="rounded border bg-green-500 px-2 py-2 font-bold flex gap-2 items-center text-white hover:bg-green-600 transition-colors"
          >
            Agregar Producto
            <IoAddCircle size={20} />
          </button>
        
      </div>


      {/* Dropdown Section */}
     <SearchForm  search={search} setSearch={setSearch} />

      <div className="relative overflow-x-auto  sm:rounded-lg bg-white p-4 shadow-md">
       <TableProducts products={products} showFormProducts={showFormProducts} removeProduct={removeProduct}  />
      </div>

      {showForm && (
        <FormProducts props={{isUpdating, setShowForm, setIsUpdating, loading, post, productSelected, put}} />
      )} 
    </div>
  );
};
