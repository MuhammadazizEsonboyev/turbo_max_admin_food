import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Section1.css"

export default function Section1() {
  return (
    <div>
        <Container>
            <Row>
                <Col xs={12}>
                    <h1 className='section1_tech'>My Tech Stack</h1>
                </Col>
                <Col xs={12}>
                    <p className='section1_p'> Technologies I’ve been working with recently</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
