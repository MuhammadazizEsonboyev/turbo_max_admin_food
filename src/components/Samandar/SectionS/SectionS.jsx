import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Section1.css"

const SectionS = () => {
    return (
        <>
            <section>

                <Container>
                    <Row className="justify-content-start">
                        <h4 className="recent">Recent posts</h4>

                        <Col xs={5} className='d-none d-lg-block' >
                            <div className="Card">
                                <h2 className="section_text">Making a design system from <br />scratch</h2>
                                <div className="textBox d-flex">
                                    <p className="data">12 Feb 2020</p>
                                    <div className="line"></div>
                                    <p className="data">Design, Pattern</p>
                                </div>
                                <p className="P_Text">Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint. Velit officia consequat <br /> duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.</p>
                            </div>
                        </Col>

                        <Col xs={5} className='d-none d-lg-block'>
                            <div className="Card">
                                <h2 className="section_text">Creating pixel perfect icons in <br /> Figma</h2>
                                <div className="textBox d-flex">
                                    <p className="data">12 Feb 2020</p>
                                    <div className="line"></div>
                                    <p className="data">Figma, Icon Design</p>
                                </div>
                                <p className="P_Text">Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint. Velit officia consequat <br /> duis enim velit mollit. Exercitation veniam  <br /> consequat sunt nostrud amet.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center d-block d-lg-none">

                        <Col xs={10} lg={4} className='d-block d-lg-none'>
                            <div className="Card">
                                <h2 className="section_text">Making a design system from <br />scratch</h2>
                                <div className="textBox d-flex">
                                    <p className="data">12 Feb 2020</p>
                                    <div className="line"></div>
                                    <p className="data">Design, Pattern</p>
                                </div>
                                <p className="P_Text">Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint. Velit officia consequat <br /> duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.</p>
                            </div>
                        </Col>

                        <Col xs={10} lg={4} className='d-block d-lg-none'>
                            <div className="Card">
                                <h2 className="section_text">Creating pixel perfect icons in <br /> Figma</h2>
                                <div className="textBox d-flex">
                                    <p className="data">12 Feb 2020</p>
                                    <div className="line"></div>
                                    <p className="data">Figma, Icon Design</p>
                                </div>
                                <p className="P_Text">Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint. Velit officia consequat <br /> duis enim velit mollit. Exercitation veniam  <br /> consequat sunt nostrud amet.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SectionS