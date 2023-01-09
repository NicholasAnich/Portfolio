import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import { gsap } from 'gsap';
import Introduction from '../components/introduction/Introduction.component';

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
        <title>Home</title>
        <meta name='Nicholas Anich' content='my website!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={`${styles.test} ${styles[theme]}`}>
        <Introduction />
        <div id='about' className={styles.aboutMeContainer}>
          <h3 className={styles.aboutMeTitle}>About me</h3>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src='/images/profilePic.jpg'
              width={200}
              height={200}
              alt='Author Nicholas Anich'
            />
          </div>
          <div className={styles.body}>
            <p className={styles.paragraph}>
              "As a software engineer based in Los Angeles, CA, I specialize in
              crafting accessible HTML, utilizing modern CSS techniques, and
              writing clean and efficient JavaScript code."
            </p>
            <p className={styles.paragraph}>
              "I am proficient in using React, but am also able to adapt to any
              tools that may be required.
            </p>
            <p className={styles.paragraph}>
              {' '}
              When I'm not coding, you can find me exploring the great outdoors,
              whether it's going for a hike, run, or bike ride. I invite you to
              take a look at my work."
            </p>
          </div>
        </div>
        <div className={styles.toolContainer}>
          <h3 className={styles.toolTitle}>Tools</h3>
          <ul className={styles.toolList}>
            <li className={styles.toolItem}>
              <img
                src='/htmlLogo.png'
                alt='html logo'
                height={50}
                width={50}
              ></img>
            </li>
            <li className={styles.toolItem}>
              <img
                src='/cssLogo.png'
                alt='cascading style sheets logo'
                height={50}
                width={50}
              ></img>
            </li>
            <li className={styles.toolItem}>
              <img
                src='/jsLogo.png'
                alt='javascript logo'
                height={50}
                width={50}
              ></img>
            </li>
            <li className={styles.toolItem}>
              <img
                src='/reactLogo.png'
                alt='react logo'
                height={50}
                width={50}
              ></img>
            </li>
            <li className={styles.toolItem}>
              <img
                src='/sassLogo.png'
                alt='sass logo'
                height={50}
                width={50}
              ></img>
            </li>
            <li className={styles.toolItem}>
              <img
                src='/nodeLogo.png'
                alt='nodejs logo'
                height={50}
                width={50}
              ></img>
            </li>
            <li className={styles.toolItem}>
              <img
                src='/expressLogo.png'
                alt='nodejs express logo'
                height={50}
                width={50}
              ></img>
            </li>
          </ul>
        </div>

        <div className={styles.linkContainer}>
          <Link href='/contact' className={styles.btnLink}>
            Contact Me
          </Link>
          <Link href='/portfolio' className={styles.btnLink}>
            Projects
          </Link>
        </div>
      </div>
    </>
  );
}
