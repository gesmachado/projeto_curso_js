// Produtos
// - Background - > transparente
// - colocar alguns produtos e preços
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Products() {
  return (
    <div>
      <Container>
        <Row><h1>Produtos</h1></Row>
        <Row>
          <Col> </Col>
          <Col> 
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.discordapp.com/attachments/1090680478299852801/1091415931068104734/03-6305881494e13_mini.png"
                  alt="First slide"
                  height="500"
                />
                <Carousel.Caption>
                  <h3>Óleo para barba</h3>
                  <p>R$ 15,00 a unidade</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cf.shopee.com.br/file/0b8d5a78f6fe45a798777f326f974773"
                  alt="Second slide"
                  height="500"
                />
                <Carousel.Caption>
                  <h3>Shampoo 2x1</h3>
                  <p>R$ 30,00 a unidade.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.discordapp.com/attachments/1090680478299852801/1091415776549928960/09-6306a8843a016.png"
                  alt="Third slide"
                  height="500"
                />
                <Carousel.Caption>
                  <h3>Loção pós-barba</h3>
                  <p>R$ 35,00 a unidade</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col> </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Products;
