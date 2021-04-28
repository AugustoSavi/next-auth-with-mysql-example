/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';

export default function EntryForm() {
  const [_title, setTitle] = useState('');
  const [_content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const { id, title, content } = router.query;

  useEffect(() => {
    if (typeof title === 'string') {
      setTitle(title);
    }
    if (typeof content === 'string') {
      setContent(content);
    }
  }, [title, content]);

  async function submitHandler(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/edit-entry', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          title: _title,
          content: _content,
        }),
      });
      const json = await res.json();
      setSubmitting(false);
      if (!res.ok) throw Error(json.message);
      Router.push('/');
    } catch (error) {
      throw Error(error.message);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="my-4">
        <label htmlFor="title">
          <h3 className="font-bold">Title</h3>
        </label>
        <input
          id="title"
          className="shadow border rounded w-full"
          type="text"
          name="title"
          value={_title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="content">
          <h3 className="font-bold">Content</h3>
        </label>
        <textarea
          className="shadow border resize-none focus:shadow-outline w-full h-48"
          id="content"
          name="content"
          value={_content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <Button>
        {submitting ? 'Saving ...' : 'Save'}
      </Button>
    </form>
  );
}
