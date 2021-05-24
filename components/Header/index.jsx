/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/client';
import { Navbar, Nav, Button } from 'react-bootstrap';
import styles from './header.module.css';

// The approach used in this component shows how to built a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  // eslint-disable-next-line no-unused-vars
  const [session, loading] = useSession();

  return (
    <>
      <noscript>
        <style>{'.nojs-show { opacity: 1; top: 0; }'}</style>
      </noscript>

      <Navbar bg="dark" variant="dark">

        <Nav className="mr-auto">

          <Link href="/">
            <Image
              src="/logoUnesc.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </Link>

          <Nav.Link>
            <Link href="/">
              <a className={styles.link}>Home</a>
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link href="/entries">
              <a className={styles.link}>Entries</a>
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link href="/server">
              <a className={styles.link}>Server</a>
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link href="/protected">
              <a className={styles.link}>Protected</a>
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link href="/api-example">
              <a className={styles.link}>Api</a>
            </Link>
          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link>
            {!session && (
            <>
              <Button
                variant="primary"
                href="/api/auth/signin"
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </Button>
            </>
            )}

            {session && (
            <>
              {session.user.image
            && <span style={{ backgroundImage: `url(${session.user.image})` }} className={styles.avatar} />}

              <small className={styles.email}>{session.user.email || session.user.name}</small>

              <Button
                variant="danger"
                href="/api/auth/signout"
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </Button>
            </>
            )}
          </Nav.Link>
        </Nav>

      </Navbar>

    </>
  );
}
