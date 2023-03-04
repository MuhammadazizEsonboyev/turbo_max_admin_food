import React from 'react'
import { Row, Container, Col } from "react-bootstrap"
import "../Header/Header.css"

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
                    <Col xs={4}>
                        <img src="" alt="" />
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={7}>
                    <h2 className='my'>My Tech Stack</h2>
                    <h5 className='techno'> Technologies I’ve been working with recently</h5>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Header
