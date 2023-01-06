import styles from './projectLinks.module.scss';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function ProjectLinks({ gitLink, liveLink }) {
  return (
    <div className={styles.container}>
      <Link href={gitLink} target='_blank' className={styles.link}>
        <FontAwesomeIcon icon={faGithub} className={styles.faIcon} size='xl' />
      </Link>
      <Link href={liveLink} target='_blank' className={styles.link}>
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className={styles.faIcon}
          size='xl'
        />
      </Link>
    </div>
  );
}
