import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import styles from './hamburger.module.scss';
import clsx from 'clsx';

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
            href={'#about'}
            className={styles.navLink}
            onClick={toggleMenu}
            scroll={false}
          >
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            href={'#tools'}
            className={styles.navLink}
            onClick={toggleMenu}
            scroll={false}
          >
            Tools
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            href={'#projects'}
            className={styles.navLink}
            onClick={toggleMenu}
            scroll={false}
          >
            Projects
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            href={'#contact'}
            className={styles.navLink}
            onClick={toggleMenu}
            scroll={false}
          >
            Contact Me
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            className={styles.navBtn}
            href='/resume/Nicholas Anich.pdf'
            target='_blank'
          >
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}
