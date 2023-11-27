import { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import { DEFAULT_THEME } from "../utils/constants";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useLocalStorage("theme", DEFAULT_THEME);

    const setThemeClass = () => {
        const element = document.querySelector("html");
        if (mode === "dark") {
            element.classList.remove("light");
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
            element.classList.add("light");
        }
    };

    useEffect(() => setThemeClass(), [mode]);

    const value = {
        mode,
        setMode,
        setThemeClass,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
