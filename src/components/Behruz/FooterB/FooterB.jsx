import React, { useEffect, useState } from 'react'
import "./foot.css"
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import axios from 'axios';


export default function FooterB() {

    const [getdata, setGetdata] = useState()


    const getAllData = () => {
        axios.get("https://newrepository-production.up.railway.app/data")
            .then((res) => {
                setGetdata(res?.data)
            })
    }
    useEffect(() => {
        getAllData()
    }, [])
    console.log(getAllData)

    return (
        <>

            <Container>

                <Row className='justify-content-center mt-3'>
                    <Col xs={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="write you name" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <textarea cols="30" rows="10" style={{ width: "100%", border: "1px solid gray" }}></textarea>
                            </Form.Group>
                            <Button variant="primary" style={{ width: "100%" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

                <Row className='justify-content-center'>
                    <Col xs={6} className="mt-3">
                        <ListGroup>
                            <ListGroup.Item><b>Name:</b>Bekhruz</ListGroup.Item>
                        </ListGroup>

                    </Col>
                </Row>


                <Row className='justify-content-center mt-5'>
                    <Col>
                        <div className='icls'>
                            <a href='https://github.com/Behruzaxi'>
                                <GitHubIcon className='ico' style={{ fontSize: '60px', paddingLeft: "10px" }} />
                            </a>
                            <a href='https://www.instagram.com/s.p.a.c.e.o.n.e/'>
                                <InstagramIcon className='ico' style={{ fontSize: '60px', paddingLeft: "10px" }} />
                            </a>
                            <a href='https://www.youtube.com/channel/UCaVht7onlYQ3Jj3sqwvnhPg'>
                                <YouTubeIcon className='ico' style={{ fontSize: '60px', paddingLeft: "10px" }} />
                            </a>
                            <a href='https://t.me/spaceone_csgo'>
                                <TelegramIcon className='ico' style={{ fontSize: '60px', paddingLeft: "10px" }} />
                            </a>
                        </div>


                        <h6 className='olti'>Copyright ©2020 All rights reserved </h6>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
