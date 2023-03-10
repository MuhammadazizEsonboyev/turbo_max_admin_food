import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./head.css"
const one = require("../imagebex/one.png")
const two = require("../imagebex/two.png")
const three = require("../imagebex/three.png")

export default function HeaderB() {
    return (
        <>
            <Container>
                <Row>
                    <h5 className='work'>Featured works</h5>
                    <Col xs={10}>
                        <img src={one} className='one' />
                        <h3 className='des'>Designing Dashboards</h3>
                        <br></br>
                        <p className='dash'>Dashboard</p>

                        <p className='veli'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit<br></br> officia consequat duis enim velit  mollit. Exercitation veniam<br></br> consequat sunt nostrud amet.</p>

                        <hr className='hr'></hr>
                    </Col>
                </Row>

                <Row>
                    <Col xs={10}>
                        <img src={two} className='one' />
                        <h3 className='des'>Vibrant Portraits of 2020</h3>
                        <br></br>
                        <p className='dash'>Illustration</p>

                        <p className='veli'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit<br></br> officia consequat duis enim velit  mollit. Exercitation veniam<br></br> consequat sunt nostrud amet.</p>

                        <hr className='hr'></hr>
                    </Col>
                </Row>


                <Row>
                    <Col xs={10}>
                        <img src={three} className='one' />
                        <h3 className='des'>36 Days of Malayalam type</h3>
                        <br></br>
                        <p className='dash'>Typography</p>

                        <p className='veli'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit<br></br> officia consequat duis enim velit  mollit. Exercitation veniam<br></br> consequat sunt nostrud amet.</p>

                        <hr className='hr'></hr>
                    </Col>
                </Row>

            </Container>
        </>
    )
}
