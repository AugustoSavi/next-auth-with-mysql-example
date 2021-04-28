import { useState } from 'react';
import Link from 'next/link';
import { mutate } from 'swr';
import { Button } from 'react-bootstrap';
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
      <div className="flex items-center">
        <Link href={`/entry/${id}`}>
          <p>{title}</p>
        </Link>
        <div className="flex ml-4">
          <Button href={`/entry/edit/${id}?title=${title}&content=${content}`}>
            Edit
          </Button>
          <Button
            disabled={deleting}
            onClick={deleteEntry}
          >
            {deleting ? 'Deleting ...' : 'Delete'}
          </Button>
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
}

Entry.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Entry;
