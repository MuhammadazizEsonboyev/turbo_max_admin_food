import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Header.css"

export default function Header() {
  return (
    <>
    <nav className='back-color'>
    <Container>
      <h4 className='recent'>Recent posts</h4>
      <Row className=''>
        <div className='to-df'>
        <div className='box-place'>

        <Col xs={5}>
          <div className='post-box'>
            <div className='post-1'>
             <h3 className='intro'>Making a design system from scratch</h3>
             <div className='date-info'>
              <h5 className='date'>12 Feb 2020</h5>
              <div className='line'></div>
              <h5 className='partner'>Design, Pattern</h5>
             </div>
             <p className='mini-info' >Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint. Velit officia consequat  <br /> duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.</p>
            </div>
          </div>
        </Col>
        </div>
        <div className='post-2'>

        <Col xs={5}>
          <div className='post-box'>
            <div className='post-1'>
             <h3 className='intro'>Creating pixel perfect icons in Figma</h3>
             <div className='date-info'>
              <h5 className='date'>12 Feb 2020</h5>
              <div className='line'></div>
              <h5 className='partner'>Figma, Icon Design</h5>
             </div>
             <p className='mini-info' >Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint. Velit officia consequat  <br /> duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.</p>
            </div>
          </div>
        </Col>
        </div>
        </div>
      </Row>
    </Container>
    </nav>
    </>
  )
}
