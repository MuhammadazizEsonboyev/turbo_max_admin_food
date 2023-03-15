import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./SectionCard.css"
const imageCard1 = require("../img/1.png")
const imageCard2 = require("../img/2.png")
const imageCard3= require("../img/3.png")

const SectionCard = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-start">
                <h4 className="recent">Featured works</h4>

                    <Col xs={11} className='d-none d-lg-block'>
                   <div className="CardBox">
                   <div className="imageBox">
                        <img src={imageCard1} alt="" className="imageCard"/>
                    </div>
                    <div className="TextBox">
                        <h2 className="CardName">Designing Dashboards</h2>
                        <div className="miniBox">
                            <h5 className="dataName">2020</h5>
                            <h5 className="miniName">Dashboard</h5>
                        </div>
                        <p className="CardText">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                   </div>
                    <hr />
                    </Col>

                    <Col xs={11} className='d-none d-lg-block'>
                    <div className="CardBox">
                    <div className="imageBox">
                        <img src={imageCard2} alt="" className="imageCard"/>
                    </div>
                    <div className="TextBox">
                        <h2 className="CardName">Vibrant Portraits of 2020</h2>
                        <div className="miniBox">
                            <h5 className="dataName">2018</h5>
                            <h5 className="miniName">Illustration</h5>
                        </div>
                        <p className="CardText">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    </div>
                    <hr />
                    </Col>

                    <Col xs={11} className='d-none d-lg-block'>
                <div className="CardBox">
                <div className="imageBox">
                        <img src={imageCard3} alt="" className="imageCard"/>
                    </div>
                    <div className="TextBox">
                        <h2 className="CardName">36 Days of Malayalam type</h2>
                        <div className="miniBox">
                            <h5 className="dataName">2018</h5>
                            <h5 className="miniName">Typography</h5>
                        </div>
                        <p className="CardText">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                    <hr />
                    </Col>
                </Row>

                <Row className="justify-content-start">

                    <Col xs={11} lg={4} className='d-block d-lg-none'>
                   <div className="CardBox">
                   <div className="imageBox">
                        <img src={imageCard1} alt="" className="imageCard"/>
                    </div>
                    <div className="TextBox">
                        <h2 className="CardName">Designing Dashboards</h2>
                        <div className="miniBox">
                            <h5 className="dataName">2020</h5>
                            <h5 className="miniName">Dashboard</h5>
                        </div>
                        <p className="CardText">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                   </div>
                    <hr />
                    </Col>

                    <Col xs={11} lg={4} className='d-block d-lg-none'>
                    <div className="CardBox">
                    <div className="imageBox">
                        <img src={imageCard2} alt="" className="imageCard"/>
                    </div>
                    <div className="TextBox">
                        <h2 className="CardName">Vibrant Portraits of 2020</h2>
                        <div className="miniBox">
                            <h5 className="dataName">2018</h5>
                            <h5 className="miniName">Illustration</h5>
                        </div>
                        <p className="CardText">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    </div>
                    <hr />
                    </Col>

                    <Col xs={11} lg={4} className='d-block d-lg-none'>
                <div className="CardBox">
                <div className="imageBox">
                        <img src={imageCard3} alt="" className="imageCard"/>
                    </div>
                    <div className="TextBox">
                        <h2 className="CardName">36 Days of Malayalam type</h2>
                        <div className="miniBox">
                            <h5 className="dataName">2018</h5>
                            <h5 className="miniName">Typography</h5>
                        </div>
                        <p className="CardText">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                    <hr />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SectionCard