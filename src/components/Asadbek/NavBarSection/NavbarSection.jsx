import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import './Navbarsection.css'

function NavbarSection() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Row className='justify-content-start'>

              <Col xs={3} lg={5} >
                <div className='navs'>

                  <Nav.Link href="#home" style={{ fontWeight: "700px", fontSize: "20px", marginRight: "40px" }} >Home</Nav.Link>
                  <Nav.Link href="#link" style={{ fontWeight: "700px", fontSize: "20px", marginRight: "40px" }} >Link</Nav.Link>
                  <Nav.Link href="#link" style={{ fontWeight: "700px", fontSize: "20px" }}>Blog</Nav.Link>
                </div>
              </Col>
            </Row>

          </Navbar.Collapse>
        </Container>
      </Navbar>


      <div id='head'>
        <Container>
          <Row className='justify-content-center'>
          <Col xs={12} lg={5} className='d-block d-sm-none'>
            <img className='MainAvatar' style={{ borderRadius: "70%", width: "270px" }} src='https://www.w3schools.com/w3css/img_avatar3.png' alt="" />
          </Col>
            <Col xs={12} lg={6} >
              <h1 className='creative' >Hi, I am John,<br />
                Creative Technologist</h1>
              <p className='info' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br />
                consequat sunt nostrud amet.</p>
              <button className='down'> Download Resume</button>
          </Col>
          <Col xs={12} lg={5} className='d-none d-sm-block'>
            <img className='MainAvatar' style={{ borderRadius: "70%", marginLeft: "70px", width: "270px" }} src='https://www.w3schools.com/w3css/img_avatar3.png' alt="" />
          </Col>
        </Row>
      </Container>
    </div>


    </>
  )
}

export default NavbarSection