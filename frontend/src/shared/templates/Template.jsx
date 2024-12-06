import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

export const Template = () => {
  return (
    <div className='min-h-screen flex'>

      <Sidebar />
      <main className='flex-1 overflow-x-hidden'>
        <Header />
        <div>
          <div className='m-2 bg-white dark:bg-slate-800 transition-colors shadow-[0_12px_24px_rgba(0,0,0,0.3)] py-2 px-4 rounded-md'>

            <Outlet />
          </div>

        </div>
      </main>

    </div>
  )
}
