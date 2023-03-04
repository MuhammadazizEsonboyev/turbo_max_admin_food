import React from 'react'
import './navbar.css'
import { Col, Container, Row } from 'react-bootstrap'
const logo = require("../img/logo 1.png")
const log = require("../img/3logo.png")
const danilho = require("../img/danilho.jpg")

export default function NavbarPage() {
  return (
    <>
      <Container>
        <Row className='justify-content-center'>
          <Col>
            <div>
              <img src={logo} className="firstimg"></img>

              <ul className='ule'>
                <li className='ili'>Home</li>
                <li className='ili'>About</li>
                <li className='ili'>Tech Stack</li>
                <li className='ili'>Projects</li>
                <li className='ili'>Contact</li>
              </ul>

              <img src={log} className="git"></img>
            </div>
          </Col>

          <Col>
            <h1 className='hash'>Hi 👋,<br></br>
              My name is
              Bekhruz<br></br>
              My hobby is play CS:GO<br></br>
              and Web progrommer</h1>

              <img src={danilho} className='danil'></img>

          </Col>

        </Row>
      </Container>
    </>
  )
}
