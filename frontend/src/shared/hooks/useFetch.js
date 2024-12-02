import { useEffect, useState } from "react";   
import Swal from "sweetalert2";
export const useFetch = (url) => {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(error == 'Failed to fetch') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "No se pudo conectar a la base de datos, llame al desarrollador"
            })
        }
    }, [error])

    const getData = async () => {
        try {
            const response = await fetch(url);
            
            const data = await response.json();
            setData(data);
            setLoading(false);  
        } catch (error) {
            
            setError(error.message);
            setLoading(false);
        }
    }

    const post = async (formData) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Ocurrio un error inesperado');
            }

            console.log(result)

            const newProvider = {
               ...result.proveedor
            }

           
            setData([ newProvider,...data,]);
            setLoading(false);  

            Swal.fire({
                icon: 'success',
                title: 'Proveedor guardado correctamente',
                // showConfirmButton: false,
                timer: 1500
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message
            })
            setError(error.message);
            setLoading(false);
        }
    }

    const put = async (formData, id) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();

            if (!response.ok) {
                
                throw new Error(result.message || 'Ocurrio un error inesperado');
            }

            console.log(result.producto)



            if(result.producto) {
                const dataUpdated = data.map(product => {
                    if(product.cvproducto == result.producto.cvproducto) {
                        return result.producto;
                    }
                    return product;
                })
    
               
                setData([...dataUpdated]);
                setLoading(false);  
            } else {

                const providersUpdated = data.map(provider => {
                    if(provider.cvproveedor == result.proveedor.cvproveedor) {
                        return result.proveedor;
                    }
                    return provider;
                })
    
                console.log(providersUpdated);
               
                setData([...providersUpdated]);
                setLoading(false);  
            }


            Swal.fire({
                icon: 'success',
                title: 'Proveedor Actualizado correctamente',
                timer: 1500
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message
            })
            setError(error.message);
            setLoading(false);
        }
    }


    const remove = async (id) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            
            });
            const result = await response.json();

            if (!response.ok) {
                
                throw new Error(result.message || 'Ocurrio un error inesperado');
            }

        

            const providersUpdated = data.filter(provider => provider.cvproveedor != id)

           
            setData([...providersUpdated]);
            setLoading(false);  

            Swal.fire({
                icon: 'success',
                title: 'Proveedor Eliminado correctamente',
                // showConfirmButton: false,
                timer: 1500
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message
            })
            setError(error.message);
            setLoading(false);
        }
    }
    return {data, loading, error, getData, post, put, remove};
  
}
