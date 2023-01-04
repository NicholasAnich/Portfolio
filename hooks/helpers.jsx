import { useEffect, useState } from "react";

export default function useDarkMode() {
    const [mode, setMode] = useState("light");

    const storeModeInLocalStorage = (mode) => {
        localStorage.setItem("colorMode", mode);
    };

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
        } else {
            setMode("light");
        }
    };

    useEffect(() => {
        storeModeInLocalStorage(mode);
    }, [mode]);

    return [mode, toggleMode];
}
