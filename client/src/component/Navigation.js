
import Container from 'react-bootstrap/Container';
import {Navbar, Form} from 'react-bootstrap';
import Searchbar from './SearchBar';
import "./Navigation.css"


function Navigation() {

  return (
      <Navbar  >
        <Container>
          <Navbar.Brand href="#">grava</Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default Navigation;