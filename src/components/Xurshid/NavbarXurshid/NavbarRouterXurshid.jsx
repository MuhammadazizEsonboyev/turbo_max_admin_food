import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import "./navbarXurshid.css"

export default function NavbarRouter() {

  const NavbarXurshid = [
    {
      id: 1,
      li: "Works",
      he: "sd"
    },
    {
      id: 2,
      li: "Blog",
      he: "sd"
    },
    {
      id: 3,
      li: "Contact",
      he: "sd"
    },
  ];

  return (
    <>
      <Container>
        <Row>
         <Col xs={9}>

         </Col>
        
          <Col xs={3}>
          
    
              <div className="navbar_2">
            {NavbarXurshid.map(({he, li }) => (
           
                <Nav className={he}>{li}</Nav>
              
            ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}



