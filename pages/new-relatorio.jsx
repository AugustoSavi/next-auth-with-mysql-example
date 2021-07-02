import { Container, Button, Table } from 'react-bootstrap';
import Layout from '../components/layout';

export default function NewRelatorio() {
  return (
    <Layout>
      <Container className="mt-2">
        <Button href="/protected" className="mt-4" variant="success">
          &#9194; Voltar
        </Button>

        <div className="mb-3">
          <Table striped bordered hover variant="dark" responsive className="mt-4">
            <thead>
              <tr>
                <th>Local da busca</th>
                <th>Termo</th>
                <th>Operador</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select className="form-select form-control" aria-label="Default select">
                    <option value="Livre">Livre </option>
                    <option value="Contatos">Contatos</option>
                  </select>
                </td>

                <td>
                  <input type="text" className="form-control" placeholder="O que você está buscando?" />
                </td>

                <td>
                  <select className="form-select form-control" aria-label="Default select">
                    <option value="Livre">Livre </option>
                    <option value="Contatos">Contatos</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>
                  <select className="form-select form-control" aria-label="Default select">
                    <option value="Livre">Livre </option>
                    <option value="Contatos">Contatos</option>
                  </select>
                </td>

                <td>
                  <input type="text" className="form-control" placeholder="O que você está buscando?" />
                </td>

                <td>
                  <select className="form-select form-control" aria-label="Default select">
                    <option value="Livre">Livre </option>
                    <option value="Contatos">Contatos</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>
                  <select className="form-select form-control" aria-label="Default select">
                    <option value="Livre">Livre </option>
                    <option value="Contatos">Contatos</option>
                  </select>
                </td>

                <td colSpan="2">
                  <input type="text" className="form-control" placeholder="O que você está buscando?" />
                </td>

              </tr>
            </tbody>
          </Table>

          <Button href="/protected" className="mt-4" variant="primary">
            Salvar
          </Button>
        </div>

      </Container>
    </Layout>
  );
}
