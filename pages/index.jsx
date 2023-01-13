//REACT / NEXT
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// THEME
import { useTheme } from 'next-themes';

// COMPONENTS
import About from '../components/about/About.component';
import Introduction from '../components/introduction/Introduction.component';
import Portfolio from '../components/portfolio/Portfolio.component';
import Contact from '../components/contact/Contact.component';

//STYLES
import { gsap } from 'gsap';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const comp = useRef();
  let containerRef = useRef();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(containerRef.children, {
        lazy: false,
        stagger: {
          each: 0.4,
        },
        x: -360,
        duration: 1,
        opacity: 0,
        stagger: 0.5,
      });
    }, comp);

    return () => {
      ctx.revert();
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>Nicholas Anich</title>
        <meta name='Nicholas Anich' content='my website!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={`${styles.test} ${styles[theme]}`}>
        <Introduction />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}
