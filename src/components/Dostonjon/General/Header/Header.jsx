import React from 'react'
import { Row, Container, Col } from "react-bootstrap"
import "../Header/Header.css"
const user = require('../../imagesDoston/user1.jpg')
const img1 = require('../../imagesDoston/Vector1.png')
const img2 = require('../../imagesDoston/Vector2.png')
const img3 = require('../../imagesDoston/Vector3.png')
const img4 = require('../../imagesDoston/Vector4.png')
const img5 = require('../../imagesDoston/Vector5.png')
const img6 = require('../../imagesDoston/Vector6.png')
const img7 = require('../../imagesDoston/Vector7.png')
const img8 = require('../../imagesDoston/Vector8.png')
const img9 = require('../../imagesDoston/Vector9.png')
const img10 = require('../../imagesDoston/Vector10.png')
const img11 = require('../../imagesDoston/Vector11.png')
const img12 = require('../../imagesDoston/Vector12.png')

const Header = () => {
      return (
          <>
            <Container>
                <Row>
                    <Col xs={5}>
                        <h1 className='aboutme'>Hi 👋,
                            <br />
                            My name is
                            <br />
                            <span> Pavan MG</span>
                            <br />
                            I build things for web</h1>
                    </Col>
                    <Col xs={5}>
                        <div className="userlar">
                        <img className='user' src={user} alt="" />
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-center mb-5'>
                    <Col xs={7}>
                    <h2 className='my'>My Tech Stack</h2>
                    <h5 className='techno'> Technologies I’ve been working with recently</h5>
                    </Col>
                </Row>

                <Row  className='justify-content-between mt-5' >
        
                    <Col xs={2} >
                        <a href="https://git-scm.com/">
                        <img src={img1} alt="" />
                        </a>
                    </Col>
                    <Col xs={2}>
                        <a href="https://tailwindcss.com/">
                        <img src={img2} alt="" />
                        </a>
                        </Col>
                        <Col xs={2}>
                        <a href="https://redux.js.org/">
                        <img src={img3} alt="" />
                        </a>
                        </Col>
                    <Col xs={2}>
                        <a href="https://getbootstrap.com/"></a>
                    <img src={img4} alt="" />
                    </Col>
                    <Col xs={2}>
                    <a href="https://code.visualstudio.com/">
                    <img src={img5} alt="" />
                    </a>
                    </Col>
                    <Col xs={2}>
                    <a href="https://www.javascript.com/">
                    <img src={img6} alt="" />
                    </a>
                </Col> 
                </Row>
                <Row   className='justify-content-between mt-5  mb-5'>
                    <Col xs={2}>
                    <a href="https://ru.wikipedia.org/wiki/HTML">
                    <img  src={img7} alt="" />
                    </a>
                    </Col>
                    <Col xs={2}>
                    <a href="w3schools.com/Css/">
                    <img src={img8} alt="" />
                    </a>
                    </Col>
                    <Col xs={2}>
                    <a href="https://ru.reactjs.org/">
                    <img src={img9} alt="" />
                    </a>
                    </Col>
                    <Col xs={2}>
                    <a href="https://sass-lang.com/">
                    <img src={img10} alt="" />
                    </a>
                    </Col>
                    <Col xs={2}>
                    <a href="https://github.com/QodirovDoston?tab=repositories">
                    <img src={img12} alt="" />
                    </a>
                    </Col>
                    <Col xs={2}>
                    <img src={img11} alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Header
