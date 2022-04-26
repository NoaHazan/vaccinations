import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Form from "./form";
import Summary from "./summary";
import Home from "./home";

function App() {
  let mainClass = "";
  if(window.location.pathname === "/register")
    mainClass = "register";
  else if(window.location.pathname === "/summary") 
    mainClass = "summary";
  else if(window.location.pathname === "/") 
    mainClass = "home";

  return (
    <div className={mainClass}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="./">Home</Nav.Link>
              <Nav.Link href="./register">Register</Nav.Link>
              <Nav.Link href="./summary">Summary</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {window.location.pathname === "/register" && <Form />}
        {window.location.pathname === "/summary" && <Summary />}
        {window.location.pathname === "/" && <Home />}
      </Container>
    </div>
  );
}

export default App;