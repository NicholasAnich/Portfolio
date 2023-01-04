import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./footer.module.scss";

export default function Footer({ theme }) {
    const [isMounted, setIsMounted] = useState(false);
    const testTheme = clsx(styles.footerContainer, styles[theme]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    return <footer className={testTheme}>Footer</footer>;
}
