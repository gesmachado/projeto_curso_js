// Cursos
// - Background - > transparente
// - Tipos curso
// - Preços
// - Data, horário etc
// - Querm vai ministrar o curso
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Courses() {
  return (
    <div>
      <Container>
        <Row><h1>Cursos</h1></Row>
        <Row>
          <Col>
            <Table striped variant="dark">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Detalhes</th>
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Curso de corte padrão</td>
                  <td>Aprenderá do iniciante ao avançado</td>
                  <td>R$ 1.000,00</td>
                </tr>
                <tr>
                  <td>Curso de corte infantil</td>
                  <td>Aprenderá do iniciante ao avançado</td>
                  <td>R$ 500,00</td>
                </tr>
                <tr>
                  <td>Curso de Tonalização</td>
                  <td>Aprenderá do iniciante ao avançado</td>
                  <td>R$ 2.500,00</td>
                </tr>
                <tr>
                  <td>Curso de barba</td>
                  <td>Aprenderá do iniciante ao avançado</td>
                  <td>R$ 2.000,00</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row><h2>Cadastro</h2></Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="name" placeholder="Digite seu nome" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Curso</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Selecione uma opção</option>
                <option value="1">Curso de corte padrão</option>
                <option value="2">Curso de corte infantil</option>
                <option value="3">Curso de Tonalização</option>
                <option value="4">Curso de barba</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Outros</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Digite alguma outra informação relevantes e existir"/>
            </Form.Group>
            <Button variant="dark" type="submit">Submit form</Button>
          </Form>
        </Row>
      </Container>

    </div>
  );
}
  
  export default Courses;
  