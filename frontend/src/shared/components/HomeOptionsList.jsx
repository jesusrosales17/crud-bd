import React from 'react'
import { IoCartSharp, IoPeople } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const optionsList = [
    {
        title: 'Productos',
        icon: <IoCartSharp size={80} />,
        url: '/productos',
        background: 'bg-orange-600',
    },
    {
        title: 'Proveedores',
        icon: <IoPeople size={80} />,
        url: '/proveedores',
        background: 'bg-violet-600',
    },
]

export const HomeOptionsList = () => {
    return (
        <ul className='grid grid-cols-4 gap-10'>
            {optionsList.map((option, index) => (
                <li key={index} className='text-white'>
                    <Link to={option.url} className={`${option.background} flex flex-col items-center justify-center rounded-md py-6`}>
                        {option.icon}
                        <span className='mt-2 text-xl'>{option.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
