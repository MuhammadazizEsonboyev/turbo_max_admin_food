import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './header.css'
const card = require("../img/card1.png")
const lg = require("../img/logo 1.png")
const trilg = require("../img/3logo.png")

export default function Header() {
    return (
        <>
            <Container>
                <Row>
                    <h1 className='fav'>Favourites</h1>

                    <h5 className='buil'>Things I’ve built so far</h5>

                    <Col xs={4}>
                        <Card style={{ width: '18rem' }} className="ca">
                            <Card.Img variant="top" src={card} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xs={4}>
                        <Card style={{ width: '18rem' }} className="ca">
                            <Card.Img variant="top" src={card} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xs={4}>
                        <Card style={{ width: '18rem' }} className="ca">
                            <Card.Img variant="top" src={card} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Row>
                    <Col xs={4}>
                        <Card style={{ width: '18rem' }} className="cars">
                            <Card.Img variant="top" src={card} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={4}>
                        <Card style={{ width: '18rem' }} className="cars">
                            <Card.Img variant="top" src={card} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link> className="ca"
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={4}>
                        <Card style={{ width: '18rem' }} className="cars">
                            <Card.Img variant="top" src={card} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>


                    <Row>
                        <Col>
                            <img src={lg} className="lg"></img>

                            <ul className='ohiri'>
                                <li className='numbers'>+91 12345 09876</li>
                                <li className='numbers'>info@example.com</li>
                            </ul>
                            <img src={trilg} className="tyu"></img>
                            <hr></hr>

                            <ul className='bro'>
                                <li className='ohir'>Home</li>
                                <li className='ohir'>About</li>
                                <li className='ohir'>Technologies</li>
                                <li className='ohir'>Projects</li>
                                <li className='ohir'>Contact</li>
                            </ul>

                            <li className='dn'>Designed and built by Danilho MG with Love & CS:GO</li>
                        </Col>
                    </Row>

                </Row>
            </Container>
        </>
    )
}
