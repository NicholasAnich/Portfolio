import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './footer.module.scss';

export default function Footer({ theme }) {
  const [isMounted, setIsMounted] = useState(false);
  const footer = clsx(styles.footerContainer, styles[theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <footer className={footer}>
      <div className={styles.body}>
        &copy;Website Made by Nicholas Anich. Copywrite 2023.
      </div>
    </footer>
  );
}
