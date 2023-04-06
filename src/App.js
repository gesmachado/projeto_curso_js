import Container from 'react-bootstrap/Container';
import background from "./img/background1.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Main from './pages/main';

function App() {
  return (
    <div
      style={{ 
        backgroundImage:`url(${background})`, 
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        width: '100vw',
        height: '100vh'   ,
        backgroundPosition: 'center',
        opacity: 1, 
      }}
    >
      <>
        <Navbar bg="light" expand={false} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                src="https://cdn.discordapp.com/attachments/1090680478299852801/1090704539482603541/Logo_Barber_Shop.png"
                width="150"
                height="100"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                  Navegação
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/haircut">Cortes e Serviços</Nav.Link>
                  <Nav.Link href="/courses">Cursos</Nav.Link>
                  <Nav.Link href="/products">Produtos</Nav.Link>
                  <Nav.Link href="/about">Sobre</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        <div className='page-content'/>
        <Main/>
      </>
    </div>
  );
}

export default App;
