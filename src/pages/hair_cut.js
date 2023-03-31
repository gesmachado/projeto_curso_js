// Cortes
// - Background - > transparente
// - Tipos cortes
// - Preços
// - Funcionários
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import background from "../img/background1.png";


function HairCut() {
  return (
    <div>
      <Container>
        <Row> <h1>Cortes e Serviços</h1></Row>
        <Row>
          <Col>
            <Table striped variant="dark">
              <thead>
                <tr>
                  <th>Serviço</th>
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Corte adulto</td>
                  <td>R$ 50,00</td>
                </tr>
                <tr>
                  <td>Corte infantil</td>
                  <td>R$ 35,00</td>
                </tr>
                <tr>
                  <td>Cabelo e barba</td>
                  <td>R$ 80,00</td>
                </tr>
                <tr>
                  <td>Tonalização</td>
                  <td>R$ 150,00</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row> <h1>Funcionários</h1></Row>
        <Row>
          <Col>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1090680478299852801/1091410758262337626/145098994_3089237484662140_2139110834765148066_n.png" />
                <Card.Body>
                  <Card.Title>Gustavo Machado</Card.Title>
                  <Card.Text>
                    Possui mais de 15 anos de experiência. Trabalhou em diversas franquia pelo mundo.
                    Adora crianças. Possui 3 certificados internacionais de excelência de cortes.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Especialidade: Corte infantil</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://i.imgur.com/xLxzfqZh.jpg" />
                <Card.Body>
                  <Card.Title>Julio</Card.Title>
                  <Card.Text>
                    Possui mais de 10 anos de experiência como barbeiro e mais de 15 anos 
                    de experiência com cortes de cabelo tradicionais. Trabalhou em diversas franquia pelo mundo.
                    Possui 3 certificados internacionais para barbeiros focados em barba.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Especialidade: Barba</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1090680478299852801/1091411703020929134/ferramenta-de-cabelo-moda-e-beleza-homem-barbudo-escova-e-corte-barba-masculina-preparacao-com-tesoura-empresario-maduro-de-terno-hipster-brutal-na-barbearia-barbeiro-no-salao-de-cabeleireiro-homem-barbear_474717-67223.png" />
                <Card.Body>
                  <Card.Title>Marcos</Card.Title>
                  <Card.Text>
                    Possui mais de 10 anos de experiência com procedimentos estéticos capilares e mais de 15 anos 
                    Possui 3 certificados internacionais.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Especialidade: Tonalização, matizaçao etc</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
  }
  
export default HairCut;
  