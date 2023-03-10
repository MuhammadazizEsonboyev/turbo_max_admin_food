import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'

const NavbarS = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
          <Navbar bg="light" expand="lg">
      <Container>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home">Works</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NavbarS