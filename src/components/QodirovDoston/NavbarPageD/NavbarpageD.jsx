import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import Myimg from '../Images/My_img.jpg'
import { Col, Row } from 'react-bootstrap';
import '../NavbarPageD/NavbarD.css'
import { useState } from 'react';

const NavbarpageD = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <>
      <section style={{overflowX:'hidden'}} id='contect'>
        <Container >
          <Navbar  bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#"></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                </Nav>
                <Form style={{ gap: "60px" }} className="d-flex">
                  <Nav.Link href="#action1" className={activeNav === '#home' ? "active" : ""}style={{ fontSize: '25px' }}>Contact</Nav.Link>
                  <Nav.Link href="#blog" onClick={() => setActiveNav('#blog')} className={activeNav === '#blog' ? "active" : ""} style={{ fontSize: '25px' }}>Blog</Nav.Link>
                  <Nav.Link href="works" onClick={() => setActiveNav('#works')} className={activeNav === '#works' ? "active" : ""} style={{ fontSize: '25px' }} >Works</Nav.Link>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Row className="container">
            <Col xs={5}>
              <section className="navbar_content">
                <h1 >Hi, I am Doston,<br />
                  Creative Technologist</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam  <br /> consequat sunt nostrud amet.</p>
                <button className='btn btn-primary'>Download Resume</button>
              </section>
            </Col>
            <Col xs={3}>
              <img className='my_img' src={Myimg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default NavbarpageD
