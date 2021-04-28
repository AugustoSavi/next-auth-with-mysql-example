import Link from 'next/link';
import { Container } from 'react-bootstrap';
import styles from './footer.module.css';
import { dependencies } from '../../package.json';

export default function Footer() {
  return (
    <Container>
      <footer className={styles.footer}>
        <hr />
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <a className={styles.navItem} href="https://next-auth.js.org">Documentation</a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navItem} href="https://www.npmjs.com/package/next-auth">NPM</a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navItem} href="https://github.com/nextauthjs/next-auth-example">GitHub</a>
          </li>
          <li className={styles.navItem}>
            <Link href="/policy">
              <p className={styles.navItem}>Policy</p>
            </Link>
          </li>
          <li className={styles.navItem}>
            <em>
              next-auth@
              {dependencies['next-auth']}
            </em>
          </li>
        </ul>
      </footer>
    </Container>
  );
}
