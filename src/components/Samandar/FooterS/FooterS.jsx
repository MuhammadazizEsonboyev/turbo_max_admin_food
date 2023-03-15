import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./FooterS.css"
const icon1 = require("../img/fb.png")
const icon2 = require("../img/insta.png")
const icon3 = require("../img/Vector.png")
const icon4 = require("../img/Linkedin.png")

const FooterS = () => {
  return (
    <>
    <Container>
      <Row className="justify-content-center">
        <Col xs={7} lg={3}>
       <div className="FooterBox">
       <div className="iconBox">
          <img src={icon1} alt="" className="iconImg" />
          <img src={icon2} alt="" className="iconImg" />
          <img src={icon3} alt="" className="iconImg" />
          <img src={icon4} alt="" className="iconImg" />
        </div>
        <p className="footerText">Copyright ©2020 All rights reserved </p>
       </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default FooterS