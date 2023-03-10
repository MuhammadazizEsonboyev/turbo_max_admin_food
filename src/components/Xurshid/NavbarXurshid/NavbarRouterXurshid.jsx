import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import "./navbarXurshid.css"

export default function NavbarRouter() {
  const Xurshid = [
    {
      
    li : "Works"
    },

    {
      li : "Blog"
      },

      {
        li : "Contact"
      }


  ]
  return (



    <>
    <Container>
      <Row>


        <Col xs={9}>

        </Col>
        <Col xs={3}>
       <div className="navbar">
      {Xurshid.map(({li}) => (

<Nav.Item>
<Nav.Link>{li}</Nav.Link>
</Nav.Item>
 

))}

       </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}


