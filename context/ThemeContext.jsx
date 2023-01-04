import { createContext } from "react";
import useDarkMode from "../hooks/helpers";

export const ThemeContext = createContext({ theme: "light" });

export const ThemeProvider = ({ children }) => {
    const stuff = "this is stuff context for theme";
    return (
        <ThemeContext.Provider value={{ stuff }}>
            {children}
        </ThemeContext.Provider>
    );
};
