import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./section1Xurshid.css"

export default function Section1Xurshid() {
  return (
    <>
    <Container>
        <Row>
            <Col xs={6}>
                <p className='section1_p'>Recent posts</p>

                <div className="box">
                   <Container>
                  <Row className='justify-content-center'>
                  <h3 className='section_h3'>Making a design system from <br /> scratch</h3>
                    <ul className='ul_box'>
                        <li className='list_box'>12 Feb 2020</li>
                        <div className="or_box"></div>
                        <li className='list_box'>Design, Pattern</li>
                    </ul>
                <p>Amet minim mollit non deserunt ullamco est sit <br />
                 aliqua dolor do amet sint. Velit officia consequat <br />
                  duis enim velit mollit. Exercitation veniam <br />
                   consequat sunt nostrud amet.</p>
                  </Row>
                   </Container>
                </div>

            </Col>

    <Col xs={5}>
                <p className='section1_p1'>View all</p>

                <div className="box">
                   <Container>
                  <Row className='justify-content-center'>
                  <h3 className='section_h3'>Creating pixel perfect icons in <br /> Figma</h3>
                    <ul className='ul_box'>
                        <li className='list_box'>12 Feb 2020</li>
                        <div className="or_box"></div>
                        <li className='list_box'>Design, Pattern</li>
                    </ul>
                <p>Amet minim mollit non deserunt ullamco est sit <br />
                 aliqua dolor do amet sint. Velit officia consequat <br />
                  duis enim velit mollit. Exercitation veniam <br />
                   consequat sunt nostrud amet.</p>
                  </Row>
                   </Container>
                </div>

            </Col>



        </Row>



    </Container>
   
    </>
  )
}
