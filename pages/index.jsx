import { Container } from 'react-bootstrap';
import Layout from '../components/layout';

export default function Page() {
  return (
    <Layout>
      <Container className="mt-4">
        <h1>NextAuth.js Example</h1>
        <p>
          This is an example site to demonstrate how to use
          {' '}
          <a href="https://next-auth.js.org">NextAuth.js</a>
          {' '}
          for authentication.
        </p>
      </Container>
    </Layout>
  );
}
