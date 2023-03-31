// Sobre nós
// - Background - > transparente
// Histórinha
// Links de contatos
// Telefone
// Endereço

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';



const BarberShop = () => {
  return (
    <>
      <header>
        <Container>
          <h1 className="text-center">Developers Barber Shop</h1>
        </Container>
      </header>
      <main>
        <Container>
          <Row>
            <Col md={6}>
              <Image src="https://cdn.discordapp.com/attachments/1090680478299852801/1090704539482603541/Logo_Barber_Shop.png" alt="Barbearia do Zé" fluid />
            </Col>
            <Col md={6}>
              <h2>Nossa História</h2>
              <p>A Developers Barber Shop foi fundada em 2005 por Julio Cesar e Gustavo Eduardo, que decidiram seguir sua paixão por barbearia após participarem do Master Hair Brasil. Desde então, a Developers Barber Shop se tornou um local conhecido pela sua qualidade de serviços e ambiente acolhedor.</p>
              <p>Com o passar dos anos, a barbearia passou por algumas mudanças, mas manteve a tradição de oferecer serviços de alta qualidade a preços justos. </p>
              <h2>Como nos encontrar</h2>
              <p>Endereço: Av. Nicomedes Alves dos Santos - Morada da Colina</p>
              <p>Email: contato@developersbarber.com.br</p>
              <p>Telefones: (34) 99186-3337 ou (19) 97172-7316 </p>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default BarberShop;




