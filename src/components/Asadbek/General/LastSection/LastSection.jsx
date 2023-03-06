import React from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import './LastSection.css'
import { DynamicCard } from '../../DynamicCard'
const chain = require("../../img/akar-icons_link-chain.png")
const github = require("../../img/Vector (11).png")

export default function LastSection() {
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12}>
                        <div className='Tools'>
                            <h1 className='Tech'>
                                Projects
                            </h1>
                            <h4 className='Working'> Things I’ve built so far</h4>
                        </div>
                    </Col>
                </Row>

                <Row className='mb-5'>
                    {
                        DynamicCard.map((val) => {
                            return (
                                <Col xs={4}>
                                    <Card style={{
                                        width: '350px',
                                        borderRadius: "20px 20px 0px 0px", background: "#fffff",
                                        boxShadow: " 2px 2px 100px rgba(0, 0, 0, 0.2)",
                                        marginBottom:"50px"
                                    }}>
                                        <Card.Img variant="top" style={{width:"348.5px", height:"200px"}} src={val.img} />
                                        <Card.Body>
                                            <Card.Title style={{
                                                fontWeight: "500",
                                                fontSize: "28px",
                                                lineHeight: "26px",
                                                display: "flex",
                                                alignItems: "center",
                                                textAlign: "center",
                                                color: "#000000"
                                            }}>Project Tile goes here</Card.Title>
                                            <Card.Text>
                                           This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
                                            </Card.Text>
                                        </Card.Body>
                                            <ListGroup.Item style={{padding:"0px 0px 15px 15px"}}>Tech stack : HTML , JavaScript, SASS, React</ListGroup.Item>
                                          
                                        <Card.Body>
                                            <Card.Link href="#" ><img src={chain} style={{marginRight:"10px"}} alt="" />
                                            <a href="#" style={{color:"black"}}>Live Preview</a>
                                            </Card.Link>
                                            <Card.Link style={{paddingLeft:"75px"}} href="#">
                                                <img  src={github} alt="" style={{width:"20px", marginRight:"10px"}} />
                                                <a style={{color:"black"}} href="https://github.com/MuhammadazizEsonboyev/turbo_max_admin_food">View Code</a>
                                                </Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>

            </Container>
        </>
    )
}
