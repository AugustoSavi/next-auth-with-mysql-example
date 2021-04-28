import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import { useEntry } from '../../lib/swr-hooks';

export default function EditEntryPage() {
  const router = useRouter();
  const id = router.query.id?.toString();
  const { data } = useEntry(id);

  if (data) {
    return (
      <>
        <Container>
          <h1 className="font-bold text-3xl my-2">{data.title}</h1>
          <p>{data.content}</p>
        </Container>
      </>
    );
  }
  return (
    <>
      <Container>
        <h1 className="font-bold text-3xl my-2">...</h1>
        <p>...</p>
      </Container>
    </>
  );
}
