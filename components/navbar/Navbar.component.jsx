import Link from "next/link";
import styles from "./navbar.module.scss";

export default function Navbar() {
    return (
        <>
            <nav className={styles.navList}>
                <div className={styles.logo}>
                    <Link className={styles.logoImage} href={"/"}>
                        LOGO
                    </Link>
                </div>
                <Link href={"/"} className={styles.navItem}>
                    Home
                </Link>
                <Link href={"/portfolio"} className={styles.navItem}>
                    Portfolio
                </Link>
                <Link href={"#"} className={styles.navItem}>
                    About
                </Link>
                <Link href={"#"} className={styles.navItem}>
                    Contact Me
                </Link>
            </nav>
        </>
    );
}
