import { useEffect, useState } from 'react';

import Hamburger from '../hamburger/Hamburger.component';

import Link from 'next/link';
import Image from 'next/image';

import { clsx } from 'clsx';
import { useTheme } from 'next-themes';

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
      <header className={containerTheme}>
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
              <Link href={'#about'} className={styles.navLink} scroll={false}>
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href={'#tools'} className={styles.navLink} scroll={false}>
                Tools
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href={'#projects'}
                className={styles.navLink}
                scroll={false}
              >
                Projects
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href={'#contact'} className={styles.navLink} scroll={false}>
                Contact Me
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href='/resume/Resume.pdf'
                target='_blank'
                className={styles.navBtn}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
