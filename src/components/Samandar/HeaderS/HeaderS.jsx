import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Header.css"
const img_person = require("../img/person.jpg")

const HeaderS = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={5}>
                        <h1 className="me"> Hi, I am John,
                            <br/>Creative Technologist</h1>
                        <p className="header_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.</p>
                        <button className="header_btn">Download Resume</button>
                    </Col>
                    <Col xs={5}>
                        <div className="imgDiv">
                            <img className="header_img" src={img_person} alt="" />
                            </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HeaderS