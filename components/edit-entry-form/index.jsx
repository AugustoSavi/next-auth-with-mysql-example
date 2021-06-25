/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { Button, Container } from 'react-bootstrap';
import Layout from '../layout';

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
    <Layout>
      <Container>
        <div>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label className="form-label"> Titulo </label>
              <input
                id="title"
                className="form-control"
                type="text"
                name="title"
                value={_title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label"> Projeto esta vinculado a algum programa institucional?</label>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Sim.Qual Programa?
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Não
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label"> Linhas de extensão da proprosta do projeto </label>
              <select className="form-select form-control" aria-label="Default select">
                <option selected>selecione as desejadas</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label"> Cursos envolvidos</label>
              <select className="form-select form-control" aria-label="Default select">
                <option selected>selecione os desejados</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="content">Como está se articulando com o PPC e Calendário do(s) curso(s)?</label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                value={_content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label"> Há créditos previstos na matriz curricular?</label>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Sim. Qual(is) disciplina (s):
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Não
                </label>
              </div>
            </div>

            <Button>
              {submitting ? 'Salvando ...' : 'Salvar'}
            </Button>
          </form>
        </div>
      </Container>
    </Layout>
  );
}
