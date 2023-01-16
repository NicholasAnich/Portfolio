import { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import styles from './introduction.module.scss';
import { gsap } from 'gsap';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import Blobs from '../splineAsset/Blobs.component';

export default function Introduction() {
  const { theme } = useTheme();
  const introContainer = clsx(styles.introContainer, styles[theme]);
  const comp = useRef();
  let containerRef = useRef();

  useLayoutEffect(() => {
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

  return (
    <div
      className={introContainer}
      ref={(element) => {
        containerRef = element;
      }}
    >
      <h1 className={styles.introduction}>Hey, my name is </h1>
      <h2 className={styles.author}>Nicholas Anich</h2>
      <h3 className={styles.snippet}>I like to build visually cool websites</h3>
      <p className={styles.whatIdo}>
        I'm a software engineer specializing in Front-End Developement.
      </p>

      {/* <div className={styles.blobs}>
        <Blobs />
      </div> */}
      <Link className={styles.btnLink} href='#about' scroll={false}>
        About Me
      </Link>
    </div>
  );
}
