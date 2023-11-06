import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { Link,} from 'react-router-dom';

function Navbarr() {
  

  return (
    <Navbar className="c1">
      <Container>
        <Navbar.Brand to="/">E-Prathibha</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">

          <Navbar.Text style={{ marginRight: "150px" }}>
            <Link to="/login">Login/</Link>
            <Link to="/register">Register</Link>
          </Navbar.Text>

          <Navbar.Text>
          
          </Navbar.Text>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
