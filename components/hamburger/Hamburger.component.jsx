import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./hamburger.module.scss";
import clsx from "clsx";

export default function Hamburger({ isOpen }) {
    const hamburger = clsx(styles.hamburgerMenu, {
        [styles.isOpen]: isOpen,
        [styles.isClosed]: !isOpen,
    });

    return (
        <div className={hamburger}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href={"/"} className={styles.navLink}>
                        Home
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href={"/portfolio"} className={styles.navLink}>
                        Portfolio
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href={"/about"} className={styles.navLink}>
                        About
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href={"/contact"} className={styles.navLink}>
                        Contact Me
                    </Link>
                </li>
            </ul>
        </div>
    );
}
