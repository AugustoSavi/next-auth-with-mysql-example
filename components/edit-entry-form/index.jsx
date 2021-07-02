/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import {
  Button, Col, Container, Form, Table,
} from 'react-bootstrap';
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
          <h3 className="p-4">Cabeçalho</h3>
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
              <div>
                <label className="form-label">Coordenador do projeto</label>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="Nome" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Email" />
                  </Col>
                </Form.Row>
              </div>
            </div>

            <div className="mb-3">
              <div>
                <label className="form-label">Coordenador do Programa</label>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="Nome" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Email" />
                  </Col>
                </Form.Row>
              </div>
            </div>

            <div className="mb-3">
              <div>
                <label className="form-label">Programa que esta vinculado</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="mb-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  CET
                </label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  CSA
                </label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  HCE
                </label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  SAU
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label"> Linhas de extensão da proprosta do projeto </label>
              <select className="form-select form-control" aria-label="Default select">
                <option value="2006 – Alfabetização, leitura e escrita">2006 – Alfabetização, leitura e escrita </option>
                <option value="2006 – Artes cênicas">2006 – Artes cênicas</option>
                <option value="2006 – Artes integradas">2006 – Artes integradas </option>
                <option value="2006 – Artes plásticas">2006 – Artes plásticas</option>
                <option value="2006 – Artes visuais">2006 – Artes visuais</option>
                <option value="2006 – Comunicação estratégica">2006 – Comunicação estratégica</option>
                <option value="2006 – Desenvolvimento de produtos">2006 – Desenvolvimento de produtos</option>
                <option value="2006 – Desenvolvimento regional">2006 – Desenvolvimento regional </option>
                <option value="2006 – Desenvolvimento rural e questão agrária">2006 – Desenvolvimento rural e questão agrária</option>
                <option value="2006 – Desenvolvimento tecnológico">2006 – Desenvolvimento tecnológico</option>
                <option value="2006 – Desenvolvimento urbano">2006 – Desenvolvimento urbano </option>
                <option value="2006 – Direitos individuais e coletivos">2006 – Direitos individuais e coletivos </option>
                <option value="2006 – Educação profissional">2006 – Educação profissional</option>
                <option value="2006 – Empreendedorismo">2006 – Empreendedorismo </option>
                <option value="2006 – Emprego e renda">2006 – Emprego e renda</option>
                <option value="2006 – Endemias e epidemias">2006 – Endemias e epidemias </option>
                <option value="2006 – Espaços de ciência">2006 – Espaços de ciência </option>
                <option value="2006 – Esporte e lazer">2006 – Esporte e lazer</option>
                <option value="2006 – Estilismo">2006 – Estilismo </option>
                <option value="2006 – Fármacos e medicamentos">2006 – Fármacos e medicamentos</option>
                <option value="2006 – Formação de professores (formação docente)">2006 – Formação de professores (formação docente)</option>
                <option value="2006 – Gestão do trabalho">2006 – Gestão do trabalho </option>
                <option value="2006 – Gestão informacional">2006 – Gestão informacional </option>
                <option value="2006 – Gestão institucional">2006 – Gestão institucional </option>
                <option value="2006 – Gestão pública">2006 – Gestão pública </option>
                <option value="2006 – Grupos sociais vulneráveis">2006 – Grupos sociais vulneráveis </option>
                <option value="2006 – Infância e adolescência">2006 – Infância e adolescência</option>
                <option value="2006 – Inovação tecnológica">2006 – Inovação tecnológica </option>
                <option value="2006 – Jornalismo">2006 – Jornalismo</option>
                <option value="2006 – Jovens e adultos">2006 – Jovens e adultos </option>
                <option value="2006 – Línguas estrangeiras">2006 – Línguas estrangeiras </option>
                <option value="2006 – Metodologias e estratégias de ensino/aprendizagem">2006 – Metodologias e estratégias de ensino/aprendizagem </option>
                <option value="Mídias-artes">Mídias-artes </option>
                <option value="Mídias">Mídias </option>
                <option value="2006 – Música">2006 – Música</option>
                <option value="2006 – Organizações da sociedade civil e movimentos sociais e populares">2006 – Organizações da sociedade civil e movimentos sociais e populares</option>
                <option value="2006 – Patrimônio cultural, histórico, natural e imaterial">2006 – Patrimônio cultural, histórico, natural e imaterial </option>
                <option value="2006 – Pessoas com deficiências, incapacidades, e necessidades especiais">2006 – Pessoas com deficiências, incapacidades, e necessidades especiais </option>
                <option value="2006 – Propriedade intelectual e patente">2006 – Propriedade intelectual e patente</option>
                <option value="2006 – Questões ambientais">2006 – Questões ambientais</option>
                <option value="2006 – Recursos hídricos">2006 – Recursos hídricos</option>
                <option value="2006 – Resíduos sólidos">2006 – Resíduos sólidos </option>
                <option value="2006 – Saúde animal">2006 – Saúde animal</option>
                <option value="2006 – Saúde da família">2006 – Saúde da família </option>
                <option value="2006 – Saúde e proteção no trabalho">2006 – Saúde e proteção no trabalho </option>
                <option value="2006 – Saúde humana">2006 – Saúde humana</option>
                <option value="2006 – Segurança alimentar e nutricional">2006 – Segurança alimentar e nutricional</option>
                <option value="2006 – Segurança pública e defesa social">2006 – Segurança pública e defesa social</option>
                <option value="2006 – Tecnologia da informação">2006 – Tecnologia da informação </option>
                <option value="2006 – Temas específicos / Desenvolvimento humano">2006 – Temas específicos / Desenvolvimento humano</option>
                <option value="2006 – Terceira idade">2006 – Terceira idade </option>
                <option value="2006 – Turismo">2006 – Turismo </option>
                <option value="2006 – Uso de drogas e dependência química">2006 – Uso de drogas e dependência química</option>
              </select>
            </div>

            <Button variant="success">+ Linha de extensão</Button>

            <div className="mb-3">
              <label className="form-label"> O projeto classifica-se em qual/quais área(s) tematicas</label>
              <select className="form-select form-control" aria-label="Default select">
                <option selected>selecione os desejados</option>
                <option value="Comunicação">Comunicação</option>
                <option value="Cultura">Cultura</option>
                <option value="Direitos Humanos e Justiça">Direitos Humanos e Justiça</option>
                <option value="Educação">Educação</option>
                <option value="Meio Ambiente">Meio Ambiente</option>
                <option value="Saúde">Saúde</option>
                <option value="Tecnologia e Produção">Tecnologia e Produção</option>
                <option value="Trabalho">Trabalho</option>
              </select>
            </div>

            <Button variant="success">+ área tematica</Button>

            <h3 className="p-4">Recursos Humanos</h3>

            <div className="mb-3">
              <div>
                <label className="form-label">Cordenadores e professores com horas/aulas</label>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="Nome" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Titulo" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Formação acadêmica" />
                  </Col>
                </Form.Row>
                <Form.Row className="pt-1">
                  <Col>
                    <Form.Control placeholder="Cargo no projeto" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Carga horária no projeto" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Email" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Telefone" />
                  </Col>
                </Form.Row>
              </div>
              <Button variant="success" className="mt-2">+ Cordenadore/professore </Button>
            </div>

            <div className="mb-3">
              <div>
                <label className="form-label">Discentes</label>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="Nome" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Código aluno" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Curso matrículado" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Fase" />
                  </Col>
                </Form.Row>
                <Form.Row className="pt-1">
                  <Col>
                    <Form.Control placeholder="Carga horária no projeto" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Bolsista" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Tipo de bolsa" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Data de início no projeto" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Data de término no projeto" />
                  </Col>
                </Form.Row>
                <Form.Row className="pt-1">
                  <Col>
                    <Form.Control placeholder="Email" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Telefone" />
                  </Col>
                </Form.Row>
              </div>
              <Button variant="success" className="mt-2">+ Dicente </Button>
            </div>

            <div className="mb-3">
              <div>
                <label className="form-label">Responsavel pelo preenchimento do projeto</label>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="Nome" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Email" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Telefone" />
                  </Col>
                </Form.Row>
              </div>
            </div>

            <div className="mb-3">
              <div>
                <label className="form-label">Indicar a(s) área(s) do projeto</label>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="área" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Curso" />
                  </Col>
                </Form.Row>
              </div>
              <Button variant="success" className="mt-2">+ Área </Button>
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

            <div className="mb-3">
              <h3 className="p-4">Relatórios de atividades</h3>
              <div className="mb-3">
                <div>
                  <Form.Row>
                    <Col>
                      <Form.Control placeholder="Descrição da atividades" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Local" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Data inicial" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Data final" />
                    </Col>
                  </Form.Row>
                  <Form.Row className="pt-2">
                    <Col>
                      <Form.Control placeholder="Turno" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Nº participantes da equipe do projeto" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Nº participantes da comunidade" />
                    </Col>
                  </Form.Row>

                  <Form.Row className="pt-2">
                    <Col>
                      <Form.Control placeholder="Instrumento de  comprovação datado (fotos, atas  de reuniões, lista de presença, certificados de participação, etc)" />
                    </Col>
                  </Form.Row>
                </div>
                <Button variant="success" className="mt-2">+ Relatório de atividade </Button>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="p-4">Relatório de atividades</h3>
              <div className="mb-3">
                <div>
                  <Form.Row>
                    <Col>
                      <Form.Control placeholder="Descrição da atividades" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Local" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Data inicial" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Data final" />
                    </Col>
                  </Form.Row>
                  <Form.Row className="pt-2">
                    <Col>
                      <Form.Control placeholder="Turno" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Nº participantes da equipe do projeto" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Nº participantes da comunidade" />
                    </Col>
                  </Form.Row>

                  <Form.Row className="pt-2">
                    <Col>
                      <Form.Control placeholder="Instrumento de  comprovação datado (fotos, atas  de reuniões, lista de presença, certificados de participação, etc)" />
                    </Col>
                  </Form.Row>
                </div>
                <Button variant="success" className="mt-2">+ Relatório de atividade </Button>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="p-4">Nº participantes da comunidade</h3>
              <Table striped bordered hover variant="dark" responsive>
                <thead>
                  <tr>
                    <th>Público alvo (2021/1)</th>
                    <th>Masculino</th>
                    <th>Feminino</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bebê (até 3 anos)</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Criança/Adolescente (de 3 até 16)</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Adulto</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Idoso</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                </tbody>
              </Table>
              <Button variant="success" className="mt-2">+ Semestre</Button>
            </div>

            <div className="mb-3">

              <h3 className="p-4">Considerando as atividades realizadas na comunidade, dentre as opções listadas a seguir, informe o(s) público(s) do projeto (mais representativo)</h3>

              <Table striped bordered hover variant="dark" responsive>
                <thead>
                  <tr>
                    <td colSpan="3"> 1-direta 2-indiretamente</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Escolas públicas</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Escolas particulares</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Associações</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Pequenos produtores</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Pessoas com deficiência</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Negros/índios/quilombolas</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Adolescentes em conflito com a lei</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Indivíduos apenados e/ou egressos do sistema penitenciário</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Indivíduos em situação de rua (moradores de rua)</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Migrantes/imigrantes</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Família</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Usuários de substâncias psicoativas</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Comunidade científica</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Lideranças locais</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Moradores de área de ocupação </td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Outras ONGs</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Organização/movimentos populares</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Comunidades locais</td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td>Comunidades locais</td>
                    <td><input type="text" placeholder="Qual?" className="form-control" /></td>
                    <td><input type="number" min="2" max="2" className="form-control" /></td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className="mb-3">
              <h3 className="p-4">Assinale o(s) vínculo(s) do projeto aos objetivos de desenvolvimento sustentável</h3>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Erradicação da pobreza</label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Fome zero e agricultura sustentável</label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Saúde e bem-estar</label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Educação de qualidade</label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Igualdade de gênero</label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Água potável e saneamento</label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Energia limpa e acessível </label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Trabalho decente e crescimento econômico</label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Indústria, inovação e infraestrutura</label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Redução de desigualdades</label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Cidade e comunidades sustentáveis</label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Consumo e produção sustentáveis</label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Ação contra a mudança global do clima</label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Vida na água</label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Vida terrestre</label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Paz, justiça e instituições eficazes</label>
                <br />
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Parceria e meios de implementação</label>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="p-4">Entidades e/ou parcerias envolvidas no projeto</h3>
              <div className="mb-3">
                <div>
                  <Form.Row>
                    <Col>
                      <Form.Control placeholder="Nome da instituição" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Nome do contato" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Setor do contato" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="E-mail" />
                    </Col>
                  </Form.Row>
                  <Form.Row className="pt-2">
                    <Col>
                      <Form.Control placeholder=" Celular/WhatsApp" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Telefone Fixo" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Logradouro / Nº" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Bairro" />
                    </Col>
                  </Form.Row>

                  <Form.Row className="pt-2">
                    <Col>
                      <Form.Control placeholder="Cidade" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Estado" />
                    </Col>
                  </Form.Row>
                </div>
                <Button variant="success" className="mt-2">+ Relatório de atividade </Button>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="p-4">O público do projeto está cadastrado como usuário no centro de referência de assistência social (cras)?</h3>
              <div className="mb-3">
                <div>
                  <Form.Row>
                    <Col>
                      <select className="form-select form-control" aria-label="Default select">
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                      </select>
                    </Col>
                  </Form.Row>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="p-4">Resumo do projeto: máximo 500 caracteres para uso do balanço social</h3>
              <div className="mb-3">
                <textarea className="form-control" />
              </div>
            </div>

            <div className="mb-3">
              <h3 className="p-4">Objetivos geral e específico</h3>
              <div className="mb-3">
                <textarea className="form-control" />
              </div>
            </div>

            <div className="mb-3">
              <h3 className="p-4">Metodologia</h3>
              <div className="mb-3">
                <textarea className="form-control" />
              </div>
            </div>

            <div className="mb-3">
              <h3 className="p-4">Justificativa</h3>
              <div className="mb-3">
                <textarea className="form-control" />
              </div>
            </div>

            <div className="mb-3">
              <h3 className="p-4">Infraestrutura (informar o espaço físico e equipamentos utilizados para o desenvolvimento das atividades)</h3>
              <div className="mb-3">
                <textarea className="form-control" />
              </div>
            </div>

            <div className="mb-3">
              <h3 className="p-4">O público do projeto participou da elaboração, execução, avaliação e monitoramento das atividades?</h3>
              <div className="mb-3">
                <div>
                  <Form.Row>
                    <Col>
                      <select className="form-select form-control" aria-label="Default select">
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                      </select>
                    </Col>
                  </Form.Row>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="p-4">Outras informações</h3>
              <div className="mb-3">
                <textarea className="form-control" />
              </div>
            </div>

            <div className="mb-3">
              <h3 className="p-4" style={{ color: 'red' }}>OBS: Preencher o próximo item somente para o primeiro relatório ANUAL</h3>
              <h3 className="p-4">Plano de ação para o segundo ano de desenvolvimento do projeto</h3>
              <Table striped bordered hover variant="dark" responsive>
                <thead>
                  <tr>
                    <th>Atividades a serem desenvolvidas</th>
                    <th>Resultado esperado</th>
                    <th>Previsão de participantes</th>
                    <th>Descrição dos participante do projeto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                    <td><input type="text" className="form-control" /></td>
                    <td><input type="text" className="form-control" /></td>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                </tbody>
              </Table>
              <Button variant="success" className="mt-2">+ Semestre</Button>
            </div>

            <div className="mb-3">
              <h3 className="p-4" style={{ color: 'red' }}>OBS: os itens a seguir devem ser preenchidos nos relatórios ANUAIS</h3>
              <h3 className="p-4">Plano de ação para o segundo ano de desenvolvimento do projeto</h3>
              <div className="mb-3">
                <textarea className="form-control" />
              </div>
              <Button variant="success" className="mt-2">+ Plano</Button>
            </div>

            <div className="mb-3">
              <h3 className="p-4">Novas demandas identificadas na comunidade</h3>
              <Table striped bordered hover variant="dark" responsive>
                <thead>
                  <tr>
                    <th>Atividades a serem desenvolvidas</th>
                    <th>Resultado esperado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                </tbody>
              </Table>
              <Button variant="success" className="mt-2">+ Demanda</Button>
            </div>

            <div className="mb-3">
              <h3 className="p-4">Mídias para divulgação do projeto</h3>
              <Table striped bordered hover variant="dark" responsive>
                <thead>
                  <tr>
                    <th>Nome da mídia</th>
                    <th>Meio de divulgação</th>
                    <th>Data</th>
                    <th>Link da mídia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                    <td><input type="text" className="form-control" /></td>
                    <td><input type="date" className="form-control" /></td>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                </tbody>
              </Table>
              <Button variant="success" className="mt-2">+ Midia</Button>
            </div>

            <div className="mb-3">
              <h3 className="p-4">Apresentações em eventos (anexar documento comprobatório ao final do relatório)</h3>
              <Table striped bordered hover variant="dark" responsive>
                <thead>
                  <tr>
                    <th>Nome do congresso ou seminário</th>
                    <th>Promotor do congresso ou seminário</th>
                    <th>Data</th>
                    <th>Carga horária</th>
                    <th>Modalidade (Oral, Banner, Resumo...)</th>
                    <th>Link da mídia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                    <td><input type="text" className="form-control" /></td>
                    <td><input type="date" className="form-control" /></td>
                    <td><input type="text" className="form-control" /></td>
                    <td><input type="text" className="form-control" /></td>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                </tbody>
              </Table>
              <Button variant="success" className="mt-2">+ Apresentação</Button>
            </div>

            <div className="mb-3">
              <h3 className="p-4">Publicações realizadas</h3>
              <Table striped bordered hover variant="dark" responsive>
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Organizador</th>
                    <th>Data</th>
                    <th>Espécie</th>
                    <th>Nome do periódico, livro, revista e Qualis</th>
                    <th>Meio utilizado para publicação (link)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                    <td><input type="text" className="form-control" /></td>
                    <td><input type="date" className="form-control" /></td>
                    <td><input type="text" className="form-control" /></td>
                    <td><input type="text" className="form-control" /></td>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                </tbody>
              </Table>
              <Button variant="success" className="mt-2">+ Publicação</Button>
            </div>

            <div className="mb-3">
              <h3 className="p-4">Inserir documentos a partir dessa linha (fotos, atas de reuniões, lista de presença, certificados de participação, etc). Identificar com legenda a data e atividade desenvolvida</h3>
              <Table striped bordered hover variant="dark" responsive>
                <thead>
                  <tr>
                    <th>Legenda</th>
                    <th>data</th>
                    <th>Arquivo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                    <td><input type="date" className="form-control" /></td>
                    <td><input type="file" className="form-control" /></td>
                  </tr>
                </tbody>
              </Table>
              <Button variant="success" className="mt-2">+ Publicação</Button>
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
