import React from 'react'
import { Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap'

const NavbarS = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={10} >
          <Navbar bg="light" expand="lg">
      <Container>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
          
           
          </Nav>
          <Form className="d-flex" style={{gap:"30px"}}>
          <Nav.Link href="#home">Works</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Form>
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