import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import"./Navbar.css"

const xurshid1 = require("../img/007.png")

export default function NavbarRouter() {
  return (
    <>

  <nav>
  <Container>
    <Row >
      <Col xs={5}>
     <img src={xurshid1} alt="" />
      </Col>
   
   
      <Col xs={5}>
      <div className='navbar_ul'>
      <Nav.Link>Home</Nav.Link>
            <Nav.Link  style={{marginLeft:"50px"}}>Link</Nav.Link>
            <Nav.Link style={{marginLeft:"50px"}}>Tech Stack</Nav.Link>
            
            <Nav.Link style={{marginLeft:"50px"}}>Projects</Nav.Link>
            <Nav.Link style={{marginLeft:"50px"}}>Contact</Nav.Link>
      </div>



      </Col>

      <Col xs={2}>
        <div className='navbar_icon'>
          
 
 
      
<i class="fa-brands fa-github"></i>
<i class="fa-brands fa-google"></i>
<i class="fa-brands fa-telegram"></i>
        </div>
      </Col>
    </Row>

  </Container>
  </nav>
    </>
  )
}
