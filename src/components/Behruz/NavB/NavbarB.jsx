import React from 'react'
import "./navb.css"
import { Col, Container, Row } from 'react-bootstrap'

export default function NavbarB() {
  return (
    <>
        <Container>
            <Row>
                <Col>
                    <div className='nav'>
                        <ul className='list'>
                            <li className='list_item'>Works</li>
                            <li className='list_item'>Blog</li>
                            <li className='list_item'>Contact</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}
