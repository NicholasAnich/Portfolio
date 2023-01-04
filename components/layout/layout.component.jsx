import Footer from "../footer/Footer.component";
import Navbar from "../navbar/Navbar.component";
import { useTheme } from "next-themes";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
    const { theme } = useTheme();
    return (
        <div className={styles.layoutContainer}>
            <Navbar />
            <main className={styles.mainContainer}>{children}</main>
            <Footer theme={theme} />
        </div>
    );
}
