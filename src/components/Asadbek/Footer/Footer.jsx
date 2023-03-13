import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <Container>
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
