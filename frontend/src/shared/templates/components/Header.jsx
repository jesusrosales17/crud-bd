import React from 'react'

export const Header = () => {
  return (
    <header className='p-4 py-4 shadow-xl bg-gray-700 flex justify-between sticky top-0 w-full z-10'>
        <h1 className='text-white text-lg text-center font-bold'>Punto de venta</h1>

       <ul className='flex gap-3'>
            <li>
                <a href="/proveedores" className='text-gray-100'>Proveedores</a>
            </li>

            <li>
                <a href="/productos" className='text-gray-100'>Productos</a>
            </li>
        </ul>
    </header>
  )
}
