import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Container, Row ,Col} from "react-bootstrap"
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

               <p>+99899 321-39-40   </p>
               <p>qodirovdoston806@gmail.com</p>
                    </div>
               <div className="icons">
                            <GitHubIcon style={{ fontSize:'35px'}} />
                            <InstagramIcon style={{ fontSize:'35px'}} />
                            <TwitterIcon style={{ fontSize:'35px'}} />
                        </div>
                </div>
                <hr />
            </Col>
        </Row>
        <Row className='justify-content-center'>
            <Col xs={6}>
            <ul className='otalist'>
                <li className='lista'>Home </li>
                <li className='lista'>About </li>
                 <li className='lista'>About </li> 
                <li className='lista'>Projects </li>
                <li className='lista'>Contact </li>
                
            </ul>
            </Col>
            <Col>
            <h3 className='pava'>Designed and built by Pavan MG with Love & Coffee</h3>
            </Col>
        </Row>
      </Container>
    </>
  )
}
export default FooterDost
