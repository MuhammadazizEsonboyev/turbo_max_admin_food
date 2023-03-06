import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../Navbar/NavbarDos.css'
const navicon = require('../../imagesDoston/logo1.png')

const NavbarPage = () => {
    return (
        <>
            <Container>
                <Row className='justify-content-between mt-4'>
                    <Col xs={2}>
                        <img src={navicon} alt="" />
                    </Col>
                    <Col xs={8}>
                        <ul className='ul_list'>
                            <li className='list_item'>Home</li>
                            <li className='list_item'>About</li>
                            <li className='list_item'>Tech Stack</li>
                            <li className='list_item'>Projects</li>
                            <li className='list_item'>Contact</li>
                        </ul>
                    </Col>
                    <Col xs={2}>
                        <div className="icons">
                            <a href="https://github.com/QodirovDoston">
                            <GitHubIcon style={{color:'black', fontSize:'35px'}} />
                            </a>
                            <a href="https://www.instagram.com/qodirovdoston806/">
                            <InstagramIcon style={{color:'black', fontSize:'35px'}} />
                            </a>
                            <a href='https://twitter.com/'>
                            <TwitterIcon style={{ color:'black', fontSize:'35px'}} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NavbarPage
