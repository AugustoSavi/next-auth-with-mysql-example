import { Container } from 'react-bootstrap';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <Container>
      <footer className={styles.footer}>
        <hr />
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <a className={styles.navItem} target="_blank" href="https://github.com/AugustoSavi/ControlProjectsUnesc" rel="noreferrer">Documentação / Contribuição</a>
          </li>
        </ul>
      </footer>
    </Container>
  );
}
