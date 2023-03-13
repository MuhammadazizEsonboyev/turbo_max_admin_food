import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Section.css'

export default function Section() {
  return (
    <>
    <Container>

        <Row>
            <h3 className='works'>Featured works</h3>
        <Col xs={12}>
        <div className='df-card'>
        <div className='img-box'></div>

        <div className='df-info'>

    
        <h2 className='des-dash'>Designing Dashboards</h2>
        <div className='data-Dash'>
        <div className='date-box'>
          2020
        </div>
        <h4 className='dashboard'>Dashboard</h4>
        </div>
        <p className='mini-info-sec'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit <br /> officia consequat duis enim velit mollit. Exercitation veniam consequat sunt <br />
         nostrud amet.</p>
        </div>
        </div>
        </Col>
        <Col xs={12}>
        <div className='df-card'>
        <div className='img-box'></div>

        <div className='df-info'>

    
        <h2 className='des-dash'>Vibrant Portraits of 2020</h2>
        <div className='data-Dash'>
        <div className='date-box'>
          2018
        </div>
        <h4 className='dashboard'>Illustration</h4>
        </div>
        <p className='mini-info-sec'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit <br /> officia consequat duis enim velit mollit. Exercitation veniam consequat sunt <br />
         nostrud amet.</p>
        </div>
        </div>
        </Col>
        <Col xs={12}>
        <div className='df-card'>
        <div className='img-box'></div>

        <div className='df-info'>

    
        <h2 className='des-dash'>36 Days of Malayalam type</h2>
        <div className='data-Dash'>
        <div className='date-box'>
          2018
        </div>
        <h4 className='dashboard'>Typography</h4>
        </div>
        <p className='mini-info-sec'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit <br /> officia consequat duis enim velit mollit. Exercitation veniam consequat sunt <br />
         nostrud amet.</p>
        </div>
        </div>
        </Col>
        </Row>
    </Container>
    </>
  )
}
