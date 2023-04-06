// HOME
// - Background - > transparente
// - Carrosel -> Cortes, Cursos, Produtos
// - Rodapé (extra)

import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


function Home() {
  const [vetor, setVetor] = useState([]);

  useEffect(() => {
    obterDados();
  })

  const obterDados = async () => {
      const dados = await fetch('https://jsonplaceholder.typicode.com/users');
      const converter = await dados.json();
      setVetor(converter);
  }
  const columns = [
    {
      dataField: 'name',
      text: 'Nome'
    },
    {
      dataField: 'username',
      text: 'Username'
    },
    {
      dataField: 'email',
      text: 'Email'
    },
    {
      dataField: 'phone',
      text: 'Telefone'
    }
  ];

  const paginationOptions = {
    sizePerPage: 5,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true
  };
  

  return (
    <div>
      <BootstrapTable
      bootstrap4
      keyField="id"
      data={vetor}
      columns={columns}
      pagination={paginationFactory(paginationOptions)}
    />
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
