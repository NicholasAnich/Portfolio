import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import styles from "./hamburger.module.scss";
import clsx from "clsx";

export default function Hamburger({ isOpen, toggleMenu }) {
    const { theme } = useTheme();
    const hamburger = clsx(
        styles.hamburgerMenu,
        {
            [styles.isOpen]: isOpen,
            [styles.isClosed]: !isOpen,
        },
        styles[theme]
    );

    return (
        <div className={hamburger}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link
                        href={"/"}
                        className={styles.navLink}
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link
                        href={"/portfolio"}
                        className={styles.navLink}
                        onClick={toggleMenu}
                    >
                        Portfolio
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link
                        href={"/blog"}
                        className={styles.navLink}
                        onClick={toggleMenu}
                    >
                        Blog
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link
                        href={"/contact"}
                        className={styles.navLink}
                        onClick={toggleMenu}
                    >
                        Contact Me
                    </Link>
                </li>
            </ul>
        </div>
    );
}
