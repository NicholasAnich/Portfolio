import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import styles from './projects.module.scss';
import LanguageList from '../languageList/LanguageList.component';
import ProjectLinks from '../projectLinks/ProjectLinks.component';

export default function Project({ img, title, id, languages, description }) {
  const cloudinaryImage = img.url;

  return (
    <div className={styles.grid}>
      <div>
        <h1 className={styles.projectTitle}>{title}</h1>
      </div>
      {/* <Link as={`/portfolio/${id}`} href='/portfolio/[id]'> */}
      {/* <div
        role='img'
        className={styles.mobileImage}
        aria-labelledby={`${title}-${id}`}
        style={{
          backgroundImage: `url(${cloudinaryImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
      </div> */}
      <div className={styles.projectDetailContainer}>
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
          <p className={styles.projectDescription}>{description}</p>

          <div className={styles.iconContainer}>
            <LanguageList languages={languages} />
            <ProjectLinks />
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}
