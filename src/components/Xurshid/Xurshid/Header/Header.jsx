import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Header.css"
const header1 = require("../img/header_img.png")

export default function Header() {
  return (
    <>
     <Container>
        <Row>
            <Col xs={6}>
                <h1 className='header_1'>Hi 👋, <br />
My name is <br />

Pavan MG  <br />

I build things for web</h1>
            </Col>


            <Col xs={6}>
                <img src={header1} className="img1" alt="" />
            </Col>
        </Row>
     </Container>
    </>
  )
}
