import Footer from "../footer/Footer.component";
import Navbar from "../navbar/Navbar.component";
import { useTheme } from "next-themes";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
    const { theme } = useTheme();
    // const [mode, setMode] = useState("light");

    // function toggleMode() {
    //     if (mode === "light") {
    //         setMode("dark");
    //         localStorage.setItem("theme", "dark");
    //     } else {
    //         setMode("light");
    //         localStorage.setItem("theme", "light");
    //     }
    // }

    // useEffect(() => {
    //     const localStorageTheme = window.localStorage.getItem("theme");
    //     if (localStorageTheme) setMode(localStorageTheme);
    // }, []);

    // const themeProps = { mode, setMode };

    return (
        <div className={styles.layoutContainer}>
            <Navbar />
            <main className={styles.mainContainer}>{children}</main>
            <Footer theme={theme} />
        </div>
    );
}
