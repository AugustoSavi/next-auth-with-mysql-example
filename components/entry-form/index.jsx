/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import Router from 'next/router';
import { Button } from 'react-bootstrap';

export default function EntryForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function submitHandler(e) {
    setSubmitting(true);
    e.preventDefault();
    try {
      const res = await fetch('/api/create-entry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });
      setSubmitting(false);
      const json = await res.json();
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
          value={title}
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
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <Button>
        {submitting ? 'Creating ...' : 'Create'}
      </Button>
    </form>
  );
}
