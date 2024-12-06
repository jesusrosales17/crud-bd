import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if(!savedTheme) return window.matchMedia("prefers-color-scheme: dark").matches ? "dark" : "light";
        return savedTheme;
    });

    useEffect(() => {
        if(theme === "dark")   return document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("dark");

    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return {
        theme,
        toggleTheme
    }
}