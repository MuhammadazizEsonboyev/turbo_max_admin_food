import React from 'react'
import '../Section/SectionDost.css'
import { Container, Row, Col } from 'react-bootstrap'
import GitHubIcon from '@mui/icons-material/GitHub';
const cardimg = require('../../imagesDoston/Rectangle 4.png')

const Section = () => {
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={7}>
                        <h2 className='project'>Projects</h2>
                        <h5 className='think'> Things I’ve built so far</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <div className="box">
                            <img src={cardimg} alt="" />
                            <h2 className='cardTile'>Project Tile goes here  </h2>
                            <p className='this'>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
                            <h5 className='tech'><b>Tech stack</b> : HTML , JavaScript, SASS, React</h5>
                            <div className="links">
                            <div className="link">
                                <GitHubIcon  />
                                <h2 className='live'>Live Preview</h2>
                            </div>
                            <div className="link">
                                <GitHubIcon  />
                                <h2 className='live'>View Code</h2>
                            </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Section
