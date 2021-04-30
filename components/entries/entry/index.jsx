import { useState } from 'react';
import Link from 'next/link';
import { mutate } from 'swr';
import { Button, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Entry({ id, title, content }) {
  const [deleting, setDeleting] = useState(false);

  async function deleteEntry() {
    setDeleting(true);
    const res = await fetch(`/api/delete-entry?id=${id}`, { method: 'DELETE' });
    const json = await res.json();
    if (!res.ok) throw Error(json.message);
    mutate('/api/get-entries');
    setDeleting(false);
  }

  return (
    <div>
      <Row className="p-4">
        <Link href={`/entry/${id}`}>
          <p>{title}</p>
        </Link>

        <Button href={`/entry/edit/${id}?title=${title}&content=${content}`} className="ml-4">
          &#128221; Edit
        </Button>
        <Button
          disabled={deleting}
          onClick={deleteEntry}
          className="ml-2"
        >
          &#128465;
          {' '}
          {deleting ? 'Deleting ...' : 'Delete'}
        </Button>
      </Row>
    </div>
  );
}

Entry.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Entry;
