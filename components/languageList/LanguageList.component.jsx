import styles from './languageList.module.scss';
import clsx from 'clsx';

export default function LanguageList({ languages }) {
  return (
    <div className={styles.body}>
      <ul className={styles.languageList}>
        {languages.map((language, i) => {
          const languageClass = clsx(
            styles.languageItem,
            styles[language.toLowerCase()]
          );
          return <li className={languageClass} key={`${language}-${i}`}></li>;
        })}
      </ul>
    </div>
  );
}
