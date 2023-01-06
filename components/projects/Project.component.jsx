import { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';
import styles from './projects.module.scss';
import LanguageList from '../languageList/LanguageList.component';
import ProjectLinks from '../projectLinks/ProjectLinks.component';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

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
  const cloudinaryImage = img.url;
  const containerTheme = clsx(styles.projectDetailContainer, styles[theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={styles.grid}>
      <div className={containerTheme}>
        <CldImage
          className={styles.image}
          width={1200}
          height={1200}
          src={cloudinaryImage}
          alt='photo of title'
          crop='thumb'
          gravity='center'
          sizes='(min-width: 600px) 100vw, 50vw'
        />
        <div className={styles.content}>
          <h1 className={styles.projectTitle}>{title}</h1>
          <p className={styles.projectDescription}>{description}</p>

          <div className={styles.iconContainer}>
            <LanguageList languages={languages} />
            <ProjectLinks gitLink={gitLink} liveLink={liveLink} />
          </div>
        </div>
      </div>
    </div>
  );
}

//   <div className={styles.grid}>
//     {/* <Link as={`/portfolio/${id}`} href='/portfolio/[id]'> */}
//     {/* <div
//       role='img'
//       className={styles.mobileImage}
//       aria-labelledby={`${title}-${id}`}
//       style={{
//           backgroundImage: `url(${cloudinaryImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//       }}
//       >
//   </div> */}
//     <div className={styles.projectDetailContainer}>
//       <CldImage
//         className={styles.image}
//         width={1200}
//         height={1200}
//         src={cloudinaryImage}
//         alt='photo of title'
//         crop='thumb'
//         gravity='center'
//         sizes='(min-width: 600px) 100vw, 50vw'
//       />
//       <div className={styles.content}>
//         <h1 className={styles.projectTitle}>{title}</h1>
//         <p className={styles.projectDescription}>{description}</p>

//         <div className={styles.iconContainer}>
//           <LanguageList languages={languages} />
//           <ProjectLinks gitLink={gitLink} liveLink={liveLink} />
//         </div>
//       </div>
//     </div>
//     {/* </Link> */}
//   </div>
// );
