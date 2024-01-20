import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
    const productsInCart = useSelector(state=>state.cart)

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">MyShoppe</Navbar.Brand>
        <Nav>
          <Nav.Link to="/" as={Link}>
            Dashboard
          </Nav.Link>
          <Nav.Link to="/cart" as={Link}>
            My Cart  {productsInCart.length}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
