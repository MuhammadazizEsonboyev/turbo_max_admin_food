import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./section2Xurshid.css"
const imga = require("../img/img1.png")

export default function Section2Xurshid() {
  return (
    <div>
        <Container>
            <Row>
                <Col  xs={12}>
                <h1 className='section_2'>Featured works</h1>
                </Col>
                <Col  xs={4}>
                    <img src={imga} alt="" />
                </Col>

                <Col xs={8}>
                   <h1 className='section2_h1'>Designing Dashboards</h1>
                   <div className='section2_div'>
                    <p>Dashboard</p>
                   </div>
                   <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br />
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat <br /> sunt nostrud amet.</p>
                </Col>


                <Col xs={4}>
                    <img src={imga} alt="" />
                </Col>

                <Col xs={8}>
                   <h1 className='section2_h1'>Designing Dashboards</h1>
                   <div className='section2_div'>
                    <p>Dashboard</p>
                   </div>
                   <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br />
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat <br /> sunt nostrud amet.</p>
                </Col>



                <Col xs={4}>
                    <img src={imga} alt="" />
                </Col>

                <Col xs={8}>
                   <h1 className='section2_h1'>Designing Dashboards</h1>
                   <div className='section2_div'>
                    <p>Dashboard</p>
                   </div>
                   <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br />
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat <br /> sunt nostrud amet.</p>
                </Col>

            </Row>
        </Container>
    </div>
  )
}
