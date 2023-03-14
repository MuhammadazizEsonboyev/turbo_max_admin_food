import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Accordion, Button, Col, Container, Form, Row } from 'react-bootstrap'
import './Footer.css'

export default function Footer() {
    const [value, setValue] = useState()
    const [postName, setPostName] = useState()
    const [postComment, setPostComment] = useState()

    const postComments = () => {
        axios.post("https://my-json-server-production-a01a.up.railway.app/data", { name: postName, post: postComment })
            .then((res) => {
                alert(res.statusText)
            })
    }

    const getValues = () => {
        axios.get("https://my-json-server-production-a01a.up.railway.app/data")
            .then((responsive) => {
                setValue(responsive?.data)
            })
    }
    useEffect(() => {
        getValues()
    }, [])


    return (
        <>
            <Container>

                <Row className='justify-content-center mt-3'>
                    <Col xs={12} lg={6} className='d-block d-sm-block'>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" className='your-name' onChange={(e) => setPostName(e.target.value)} placeholder="Your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <textarea name="text" id="comment" onChange={(e) => setPostComment(e.target.value)} placeholder='Comment' cols="84" rows="5"></textarea>
                            </Form.Group>
                            <Button style={{ width: "100px" }} id='btn-submit' onClick={postComments} variant="primary" >
                                Submit Your Comment
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row className='justify-content-center mt-3'>
                    <Col xs={12} lg={6} className='d-block d-sm-block'>

                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>All Comments</Accordion.Header>
                                <Accordion.Body>
                                    {
                                        value?.map((val) => {
                                            return (


                                                <Accordion id='accordion'>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header id='names'>{val.name}</Accordion.Header>
                                                        <Accordion.Body id='comment-body'>
                                                            {val.post}
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>


                                            )
                                        })
                                    }
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={11}>
                        <div className='box-of-icons'>
                            <img className='facebook-icon' src={'https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png'} alt="" />
                            <img className='insta-icon' src={"https://cdn-icons-png.flaticon.com/512/4096/4096262.png"} alt="" />
                            <img className='twitter-icon' src={'https://cdn-icons-png.flaticon.com/512/733/733635.png'} alt="" />
                            <img className='linkIn-icon' src={"https://cdn-icons-png.flaticon.com/512/80/80963.png"} alt="" />
                        </div>
                        <h2 className='copyright'>Copyright ©2020 All rights reserved</h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
