import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import "././Footer.css"
const GitHubLogo = require('../../img/Vector (11).png')
const Insta = require('../../img/Vector (10).png')
const logo = require('../../img/logo 1.png')
const youtube = require("../../img/Vector (9).png")



export default function Footer() {
  return (
    <>
    <Container>
          <Row className='justify-content-between mb-1'>
            <Col xs={3}>
              <div className="LogoBox">
                <img src={logo} alt="" />
              </div>
            </Col>
                <Col xs={2}>
                  <div  className='PhoneBox' style={{marginLeft:"60px"}} >
                    <h6 className='Phone'>+998903301092</h6>
                  </div>
                </Col>

                <Col xs={2}>
                  <div className='EmailBox'>
                    <h6 className='email'>umirzakovasad83@gmail.com</h6>
                  </div>
                </Col>

                <Col xs={3}>
                  <div className='Icons-Box' style={{margin:"5px 0px 0px 80px"}}>
                    <a href="https://github.com/Asadbecck">
                      <img  src={GitHubLogo} alt="" />
                      </a>
                      <a style={{paddingLeft:"20px"}} href="https://www.instagram.com/google_ti_mamy_mav/">
                      <img  src={Insta} alt="" />
                      </a>
                      <a style={{paddingLeft:"20px"}} href="https://www.youtube.com/@toplesofficial">
                      <img  src={youtube} alt="" />
                      </a>
                  </div>
                </Col>
          </Row>
           <Row className='justify-content-center'>
            <Col xs={11 }>
                <div style={{borderBottom:"2px solid black", margin:"50px 0px 40px 0px"}}></div>
            </Col>
           </Row>
           



           <Row>

           </Row>
        </Container>
    </>
  )
}
