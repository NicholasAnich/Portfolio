import Image from 'next/image';
import styles from './about.module.scss';
export default function About() {
  return (
    <>
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
            As a software engineer based in Los Angeles, CA, I specialize in
            crafting accessible HTML, utilizing modern CSS techniques, and
            writing clean and efficient JavaScript code.
          </p>
          <p className={styles.paragraph}>
            I am proficient in using React, but am also able to adapt to any
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
    </>
  );
}
