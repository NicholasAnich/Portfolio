import { useEffect, useState } from 'react';

import Hamburger from '../hamburger/Hamburger.component';

import Link from 'next/link';
import Image from 'next/image';

import { clsx } from 'clsx';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import styles from './navbar.module.scss';

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function toggleTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const containerTheme = clsx(styles.container, styles[theme]);
  const navContainer = clsx(styles.navContainer);
  const menuIcon = clsx(styles.hamburgerBtn, styles.menuIcon, {
    [styles.closeIcon]: isOpen,
    [styles.openIcon]: !isOpen,
  });

  const themeIcon = clsx({
    [styles.moonIcon]: theme === 'light',
    [styles.sunIcon]: theme === 'dark',
  });

  return (
    <>
      {/* <nav className={styles.navContainer}> */}
      <header className={containerTheme}>
        {/* <nav className={containerTheme}> */}
        <nav className={navContainer}>
          <Link className={styles.logo} href={'/'}>
            <Image
              className={styles.logoImage}
              src='/codeFavicon.png'
              alt='this is the logo'
              width={30}
              height={30}
            />
          </Link>
          <button
            className={menuIcon}
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href={'/'} className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href={'/portfolio'} className={styles.navLink}>
                Portfolio
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href={'/blog'} className={styles.navLink}>
                Blog
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href={'/contact'} className={styles.navLink}>
                Contact Me
              </Link>
            </li>
          </ul>
          <button
            className={styles.changeThemeButton}
            onClick={toggleTheme}
            aria-label={`Change Theme ${theme}`}
            style={{
              padding: '0.5em',
            }}
          >
            <FontAwesomeIcon
              className={themeIcon}
              icon={theme === 'light' ? faMoon : faSun}
              size={'xl'}
            />
          </button>
        </nav>
      </header>
    </>
  );
}
