import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5"
import { useDarkMode } from "../../hooks/useDarkMode"


export const DarkModeButton = () => {
    const {toggleTheme, theme} = useDarkMode();
    return (
        <button 
        onClick={toggleTheme}
        className="text-black dark:text-white transition-colors flex gap-3 items-center">
            Modo
            {theme === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
        </button>
    )
}