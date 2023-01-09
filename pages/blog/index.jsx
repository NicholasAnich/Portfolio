import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './blog.module.scss';

export default function Blog() {
  return (
    <div className={styles.containerTheme}>
      <FontAwesomeIcon className={styles.icon} icon={faCoffee} size={'xl'} />
      <p>Nothing yet! Check back later!</p>
    </div>
  );
}
