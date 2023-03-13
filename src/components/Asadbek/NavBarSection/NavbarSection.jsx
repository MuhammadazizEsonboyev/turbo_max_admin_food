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
            <Row className='justify-content-end'>

              <Col xs={3} >
                <div style={{ textAlign: "start", display: "flex" }}>

                  <Nav.Link href="#home" style={{ fontWeight: "700px", fontSize: "20px", marginRight: "40px" }} >Home</Nav.Link>
                  <Nav.Link href="#link" style={{ fontWeight: "700px", fontSize: "20px", marginRight: "40px" }} >Link</Nav.Link>
                  <Nav.Link href="#link" style={{ fontWeight: "700px", fontSize: "20px" }}>Blog</Nav.Link>
                </div>
              </Col>
            </Row>

          </Navbar.Collapse>
        </Container>
      </Navbar>


      <div id='head' style={{ margin: "170px 0px 0px 250px" }}>
        <Container>
          <Row>
            <Col xs={6}>
              <h1 style={{ fontSize: "50px", fontWeight: "700px", marginBottom: "40px", fontFamily: "Roboto" }}>Hi, I am John,<br />
                Creative Technologist</h1>
              <p className='info' style={{ fontWeight: "700px", fontSize: "14px" }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br />
                consequat sunt nostrud amet.</p>
              <button style={{
                marginTop:"30px",
                background:"#FF6464",
                borderRadius: "2px",
                padding:"10px 20px 15px 20px",
                border:"none",
                color:"white",
                fontSize:"20px"
                }}> Download Resume</button>
          </Col>
          <Col xs={5}>
            <img className='MainAvatar' style={{ borderRadius: "70%", marginLeft: "70px", width: "270px" }} src='https://www.w3schools.com/w3css/img_avatar3.png' alt="" />
          </Col>
        </Row>
      </Container>
    </div>


    </>
  )
}

export default NavbarSection