import {Outlet} from 'react-router-dom'
import { Header } from './components/Header'

export const Template = () => {
  return (
    <div className='min-h-screen'>
        <Header/> 

        <main className='container mx-auto px-4  h-full pb-3'>
            <Outlet />
        </main>

    </div>
  )
}
