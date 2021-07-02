/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import { Container, Button, Table } from 'react-bootstrap';
import Layout from '../layout';

export default function Relatorio() {
    return (
        <Layout>
            <Container>
                <Button href="/new-relatorio" className="mt-4" variant="success">
                    &#10133; Novo relatório
                </Button>

                <div className="mb-3">
                    <Table striped bordered hover variant="dark" responsive className="mt-4">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Staus</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Todos os Contatos</td>
                                <td>-</td>
                                <td>&#128221;  &#128465; &#9199;</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </Layout>
    );
}
