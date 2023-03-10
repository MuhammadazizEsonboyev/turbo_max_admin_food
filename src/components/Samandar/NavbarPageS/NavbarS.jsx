import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const NavbarS = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={3}>
            <ul className="list">
              <li className="list_item">Works</li>
              <li className="list_item">Blog</li>
              <li className="list_item">Contact</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NavbarS