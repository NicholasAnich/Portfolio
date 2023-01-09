import Head from 'next/head';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/blog.module.scss';

export default function Blog() {
  return (
    <div className={styles.containerTheme}>
      <Head>
        <title>Blog</title>
      </Head>
      <FontAwesomeIcon className={styles.icon} icon={faCoffee} size={'xl'} />
      <p>Nothing yet! Check back later!</p>
    </div>
  );
}
