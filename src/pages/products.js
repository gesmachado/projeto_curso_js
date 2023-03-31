// Produtos
// - Background - > transparente
// - colocar alguns produtos e preços
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function Products() {
  return (
    <div>
      <Container>
        <Row><h1>Produtos</h1></Row>
        <Row>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0553/4701/9958/products/barber-academy-item_400x.jpg?v=1674053546"
                alt="First slide"
                height="1080"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cf.shopee.com.br/file/0b8d5a78f6fe45a798777f326f974773"
                alt="Second slide"
                height="1080"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://img.freepik.com/fotos-gratis/cliente-fazendo-o-corte-de-cabelo-em-um-salao-de-barbearia_1303-20861.jpg"
                alt="Third slide"
                height="1080"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </div>
  );
}

export default Products;
