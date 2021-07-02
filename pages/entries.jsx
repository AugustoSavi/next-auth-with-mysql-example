import { Button, Container, Spinner } from 'react-bootstrap';
import Layout from '../components/layout';
import Entries from '../components/entries';
import { useEntries } from '../lib/swr-hooks';

export default function Page() {
  const { entries, isLoading } = useEntries();

  return (
    <Layout>
      <Container>
        <Button href="/new" className="mt-4" variant="success">
          &#10133; Novo Projeto
        </Button>
        {isLoading && (
          <>
            {' '}
            <Spinner animation="border" variant="primary" />
            {' '}
          </>
        )}
        <Entries entries={entries} />
      </Container>
    </Layout>
  );
}
