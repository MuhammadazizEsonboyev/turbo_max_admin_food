import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./footerXurshid.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function FooterXurshid() {
  return (
    <>
    <Container>
        <Row>
            <Col xs={12}>
               <div className='footer_1'>
               <FacebookIcon/>
               <InstagramIcon/>
               <TwitterIcon/>
               <LinkedInIcon/>
               </div>
            </Col>

            <Col xs={12}>
                <h3 className='footer_h3'>Copyright ©2020 All rights reserved </h3>
            </Col>
        </Row>
    </Container>
    </>
  )
}
