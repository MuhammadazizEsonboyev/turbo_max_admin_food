import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./section1Xurshid.css"

export default function Section1Xurshid() {
  return (
    <>
    <Container>
        <Row>
           <Col>
           <Col xs={7}>
                <p className='section1_p'>Recent posts</p>

                <div className="box">
                   <Container>
                  <Row className='justify-content-center'>
                  <h3 className='section_h3'>Making a design system from  scratch</h3>
                    <ul className='ul_box'>
                        <li className='list_box'>12 Feb 2020</li>
                        <div className="or_box"></div>
                        <li className='list_box'>Design, Pattern</li>
                    </ul>
                <p className='section1_p2'>Amet minim mollit non deserunt ullamco est sit <br />
                                       aliqua dolor do amet sint. Velit officia consequat <br />
                                        duis enim velit mollit. Exercitation veniam conse <br />
                                        quat sunt nostrud amet.</p>
                  </Row>
                   </Container>
                </div>

            </Col>

           </Col>
    <Col xs={5}>
                <p className='section1_p1'>View all</p>

                <div className="box">
                   <Container>
                  <Row className='justify-content-center'>
                  <h3 className='section_h3'>Creating pixel perfect icons in  Figma</h3>
                    <ul className='ul_box'>
                        <li className='list_box'>12 Feb 2020</li>
                        <div className="or_box"></div>
                        <li className='list_box'>Figma, Icon Design</li>
                    </ul>
                    <p className='section1_p2'>Amet minim mollit non deserunt ullamco est sit <br />
                                       aliqua dolor do amet sint. Velit officia consequat <br />
                                        duis enim velit mollit. Exercitation veniam conse <br />
                                        quat sunt nostrud amet.</p>
                  </Row>
                   </Container>
                </div>

            </Col>



        </Row>



    </Container>
   
    </>
  )
}
