import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Footer.css"
const footer_img = require("../img/007.png")


export default function Footer() {
  return (
    <>
      <footer>
        <Container>
            <Row>
                <Col xs={7}>
                    <img src={footer_img} alt="" />

                </Col>

                <Col xs={3}>
               <div className='footer'>
               <p>+91 12345 09876</p>
                <p>info@example.com</p>
               </div>

                </Col>


                <Col xs={2}>
                <div className="footer2">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-github"></i>
                </div>

                </Col>

<hr />


            </Row>
        </Container>
      </footer>
    </>
  )
}
