import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import OffCanvas from './OffCanvas';
function DashboardHead() {
  return (
    
    <> 



<Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand><OffCanvas />
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Welcome"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Edit Profile
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <Dropdown.Menu className="topnv" show>
      <h3 className='dnme'  eventKey="1" ><span className ='dshp'> <OffCanvas /> Dashboard </span></h3>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <span className='btndivshw'> 
      <Dropdown.Item href="#/action-1">Edit Profile</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
      </span>
    </DropdownButton>
      
    </Dropdown.Menu> */}
    <Container className='dashcon'>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8}>
          xs=12 md=8
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Col xs={6}>xs=6</Col>
        <Col xs={6}>xs=6</Col>
      </Row>
    </Container>
    </>
  
    
  );
}

export default DashboardHead;


