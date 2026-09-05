import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/gatelogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Rnavbar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to="/">  {/*Käytä as={Link} ja to= (kohde) */}
          <div>
            <img
              src={logo}
              alt="GATE"
              style={{
                border: "solid white 5px",
                borderRadius :"8px",
                width: "175px",
                height: "70px",
                marginRight: "75%",
                marginTop: "2%",
              }}
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to={"News"}>Uutiset</Nav.Link>
            <NavDropdown title="Gaming" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Rnavbar;
