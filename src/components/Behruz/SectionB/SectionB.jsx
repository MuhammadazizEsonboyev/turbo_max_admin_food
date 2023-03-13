import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "./sec.css"

export default function () {
    return (
        <>
            <section className='bacbluu'>
                <Container>
                    <Row>
                        <Col xs={6}>
                            <h5 className='pos'>Recent posts</h5>
                            <Card className='card' style={{ width: '400px' }}>
                                <Card.Body>
                                    <Card.Title>Making a design system from<br></br>scratch</Card.Title>
                                        <br></br>
                                    <Card.Text>12 Feb 2020  |  Design, Pattern</Card.Text>

                                    <Card.Text>
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col xs={6}>
                            <h6 className='al'>View all</h6>
                            <Card className='cad' style={{ width: '400px' }}>
                                <Card.Body>
                                    <Card.Title>Making a design system from<br></br>scratch</Card.Title>
                                        <br></br>
                                    <Card.Text>12 Feb 2020  |  Design, Pattern</Card.Text>

                                    <Card.Text>
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
