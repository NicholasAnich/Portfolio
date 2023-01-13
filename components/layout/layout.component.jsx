import Navbar from '../navbar/Navbar.component';
import styles from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <main className={styles.mainContainer}>{children}</main>
    </div>
  );
}
