import React from 'react'
import { IoCartSharp, IoHomeOutline, IoPeopleOutline } from 'react-icons/io5'
import { Link, useLocation} from 'react-router-dom'

export const Sidebar = () => {
    const location = useLocation();
    return (
        <div className="bg-slate-900   h-screen w-[13vw] sticky top-0 left-0 text-gray-100">
            <div className="p-5 border-b border-gray-700">
                <h1 className="text-2xl font-bold text-white">Punto de Venta</h1>
                <p className="text-sm text-gray-400">Gestión simplificada</p>
            </div>

            <ul className="flex flex-col mt-5">
                <li>
                    <Link
                        to="/"
                        className={`${location.pathname === '/' ? 'bg-gray-800' : ''} flex items-center gap-3 py-3 px-5 hover:bg-gray-800 rounded transition`}

                    >
                        <IoHomeOutline />
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link
                        to="/proveedores"
                        className={`${location.pathname === '/proveedores' ? 'bg-gray-800' : ''} flex items-center gap-3 py-3 px-5 hover:bg-gray-800 rounded transition`}
                    >
                        <IoPeopleOutline />
                        Proveedores
                    </Link>
                </li>
                <li>
                    <Link
                        to="/productos"
                        className={`${location.pathname === '/productos' ? 'bg-gray-800' : ''} flex items-center gap-3 py-3 px-5 hover:bg-gray-800 rounded transition`}
                    >
                        <IoCartSharp />
                        Productos
                    </Link>
                </li>
            </ul>
        </div>
    )
}
