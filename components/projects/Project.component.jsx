import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { CldImage } from 'next-cloudinary';
import { useTheme } from 'next-themes';
import { gsap } from 'gsap';
import LanguageList from '../languageList/LanguageList.component';
import ProjectLinks from '../projectLinks/ProjectLinks.component';
import clsx from 'clsx';
import styles from './projects.module.scss';

export default function Project({
  img,
  title,
  id,
  languages,
  description,
  gitLink,
  liveLink,
}) {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  const comp = useRef();
  let projectsRef = useRef();

  const cloudinaryImage = img.url;
  const containerTheme = clsx(styles.projectDetailContainer, styles[theme]);
  const gridTheme = clsx(styles.grid, styles[theme]);
  const isEven = id % 2 === 0;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(projectsRef?.children, {
        lazy: false,
        stagger: {
          each: 0.4,
        },
        x: isEven ? 360 : -360,
        duration: 1,
        opacity: 0,
        stagger: 0.3,
      });
    }, comp);
    return () => {
      ctx.revert();
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className={gridTheme}>
      <div
        className={containerTheme}
        ref={(element) => (projectsRef = element)}
      >
        <CldImage
          className={styles.image}
          width={1200}
          height={1200}
          src={cloudinaryImage}
          alt={`photo of ${title}`}
          crop='thumb'
          gravity='center'
          sizes='(min-width: 600px) 100vw, 50vw'
        />
        <div className={styles.content}>
          <h1 className={styles.projectTitle}>{title}</h1>
          <p className={styles.projectDescription}>{description}</p>

          <div className={styles.iconContainer}>
            <LanguageList languages={languages} />
            <ProjectLinks
              gitLink={gitLink}
              liveLink={liveLink}
              isEven={isEven}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
