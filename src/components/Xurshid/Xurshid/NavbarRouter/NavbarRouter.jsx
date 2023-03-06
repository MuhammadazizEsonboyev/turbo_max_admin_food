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
          
 
 
      
<a href="https://codesandbox.io/s/github/salman1204/CRUD_React/tree/main/"><i  className="fa-brands fa-github"></i></a>
<i href="" className="fa-brands fa-google"></i>
<i className="fa-brands fa-telegram"></i>
        </div>
      </Col>
    </Row>

  </Container>
  </nav>
    </>
  )
}
