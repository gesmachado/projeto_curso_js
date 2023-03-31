// HOME
// - Background - > transparente
// - Carrosel -> Cortes, Cursos, Produtos
// - Rodapé (extra)

import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem', height: '33rem'}}>
              <Card.Img variant="top" src="https://img.freepik.com/fotos-gratis/cliente-fazendo-o-corte-de-cabelo-em-um-salao-de-barbearia_1303-20861.jpg"/>
              <Card.Body>
                <Card.Title>Cortes e serviços</Card.Title>
                <Card.Text>
                  Aqui você encontrará os melhores cortes da cidade, clique e confira!
                </Card.Text>
                <Link to="/haircut">
                  <Button variant="outline-secondary">Confira os cortes e serviços</Button>
                </Link>
                  
              </Card.Body>
            </Card> 
          </Col>
          <Col>
            <Card style={{ width: '18rem', height: '33rem'}}>
              <Card.Img variant="top" src="https://cf.shopee.com.br/file/0b8d5a78f6fe45a798777f326f974773" />
              <Card.Body>
                <Card.Title>Produtos</Card.Title>
                <Card.Text>
                  Aqui você encontrará os melhores produtos para cabelo e barba da região. 
                  Venha conferir nossos produtos!
                </Card.Text>
                <Link to="/products">
                  <Button variant="outline-secondary">Ver produtos</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
            <Col>
              <Card style={{ width: '18rem', height: '33rem'}}>
                <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0553/4701/9958/products/barber-academy-item_400x.jpg?v=1674053546" />
                <Card.Body>
                  <Card.Title>Cursos</Card.Title>
                  <Card.Text>
                    Temos os melhores cursos especializantes da região. Quer aprender com os melhores? 
                    Venha fazer um curso com a gente, clique e descubra os horários.
                  </Card.Text>
                  <Link to="/courses">
                    <Button variant="outline-secondary">Ir para cursos</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
        </Row>
      </Container>
      </div>
  );
}

export default Home;
