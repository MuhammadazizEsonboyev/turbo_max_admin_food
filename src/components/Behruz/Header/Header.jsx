import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './header.css'

export default function Header() {
  return (
        <>
            <Container>
                <Row>
                    <h1 className='fav'>Favourites</h1>

                    <h5 className='buil'>Things I’ve built so far</h5>

                    <Col>
                        
                    </Col>
                </Row>
            </Container>
        </>
  )
}
