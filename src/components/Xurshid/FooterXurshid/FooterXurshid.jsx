import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./footerXurshid.css"
import TelegramIcon from '@mui/icons-material/Telegram';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function FooterXurshid() {
  return (
    <>
    <Container>
        <Row>
            <Col xs={12}>
               <div className='footer_1'>
              <a href="https://t.me/Xurshid_Blog_2"> <TelegramIcon /></a>
              <a href="https://mail.google.com/mail/u/0/#inbox"> <GoogleIcon/></a>
               <a href="https://www.youtube.com/channel/UC9wbQhiOkB-LgBEMlg3B4EA"><YouTubeIcon/></a>
              
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
