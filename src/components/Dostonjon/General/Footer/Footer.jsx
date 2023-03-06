import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Container, Row, Col } from "react-bootstrap"
import "../Footer/FooterDoc.css"
const navicon = require('../../imagesDoston/logo1.png')

const FooterDost = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={1}>
            <img className='ioo' src={navicon} alt="" />
          </Col>
          <Col xs={9}>
            <div className="boder">
              <div className="tell">
                <p  className='email'>+99899 321-39-40   </p>
                <p className='email'>qodirovdoston806@gmail.com</p>
              </div>
              <div className="icons">
                <a href="https://github.com/QodirovDoston?tab=repositories">
                <GitHubIcon style={{ color:'black', fontSize: '35px' }} />
                </a>
                <a href="https://www.instagram.com/">
                <InstagramIcon style={{ color:'black', fontSize: '35px' }} />
                </a>
                <a href="https://twitter.com/">
                <TwitterIcon style={{ color:'black', fontSize: '35px' }} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row className='justify-content-between'>
          <Col xs={5}>
            <ul className='otalist'>
              <li className='lista'>Home </li>
              <li className='lista'>About </li>
              <li className='lista'>About </li>
              <li className='lista'>Projects </li>
              <li className='lista'>Contact </li>
            </ul>
          </Col>
          <Col xs={5}>
            <h3 className='pava'>Designed and built by  <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></h3>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default FooterDost
