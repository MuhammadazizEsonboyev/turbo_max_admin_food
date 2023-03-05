import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "././Header.css"
const breakingBad = require("../../img/breakingbadusa_20221230_p_3004646295478347070_1_3004646295478347070.png")
export default function Header() {
  return (
    <>
    <Container>
        <Row>
            <Col xs={7}>
                <h2  className='Into'> <br />
                Hello and Welcome to Los Pollos Mermanos family my name is Gustavo  but you can call me Gus
                </h2>
            </Col>
            <Col xs={5}>
                <img className='MainAvatar' src={breakingBad} alt="" />
            </Col>
        </Row>
    </Container>

    </>
  )
}
