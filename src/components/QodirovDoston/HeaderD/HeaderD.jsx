import React from 'react'
import {Row, Col, Container } from 'react-bootstrap'
import "../HeaderD/HeaderD.css";

const HeaderD = () => {
  return (
    <>
      <header>
<Container>
  <Row className="justify-content-start gap 3px">
  <Col xs={4}>
    <div className="card">
      <h3>Making a design system from scratch</h3>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
  </Col>
  <Col xs={4}>
    <div className="card">
      <h3>Making a design system from scratch</h3>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
  </Col>
  </Row>
</Container>
      </header>
    </>
  )
}

export default HeaderD
