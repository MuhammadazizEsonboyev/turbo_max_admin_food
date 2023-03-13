import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import "../HeaderD/HeaderD.css";

const HeaderD = () => {
  return (
    <>
      <section id='blog'>
        <Container id='sec'>
          <Row id="post" className="justify-content-around">
            <Col xs={4}>
              <h3 className='recend'>Recent posts</h3>
              <div className="card">
                <h3>Making a frontend system from scratch</h3>
                <div className="yil">
                  <h4>12 Feb 2020</h4>
                  <h1> </h1>
                  <h4 className='design'>professional development</h4>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </Col>
            <Col xs={4}>
              <h3 className='view'>View all</h3>
              <div className="card" style={{ marginTop: "60px" }}>
                <h3>Making a backend system from scratch</h3>
                <div className="yil">
                  <h4>12 Feb 2020</h4>
                  <h1> </h1>
                  <h4 className='design'>professional devops</h4>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HeaderD
