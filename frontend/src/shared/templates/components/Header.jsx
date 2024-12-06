import React from 'react'
import { DarkModeButton } from './DarkModeButton'

export const Header = () => {
  return (
    <header className="p-4 shadow-md bg-white dark:bg-slate-800 transition-colors trad flex items-center sticky top-0 justify-end  w-full z-10">
    
      <div>
        <DarkModeButton />
      </div>
    </header>

  )
}
