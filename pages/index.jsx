import { Container } from 'react-bootstrap';
import Layout from '../components/layout';

export default function Page() {
  return (
    <Layout>
      <Container className="mt-4">
        <h1>Bem vindo</h1>
        <p>
          Esse site foi desenvolvido com o intuito de facilitar sua vida usuário.
          <br />
          Não guarde mais seus trabalho em algum lugar que fique de difícil acesso,
          <br />
          crie e edite seus trabalhos pelo nosso site e deixe ele de fácil acesso para
          a universidade e para quem importa.
        </p>
      </Container>
    </Layout>
  );
}
