import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Form from "./form";
import Summary from "./summary";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="./register">Register</Nav.Link>
              <Nav.Link href="./summary">Summary</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {window.location.pathname === "/register" && <Form />}
        {window.location.pathname === "/summary" && <Summary />}
      </Container>
    </div>
  );
}

export default App;