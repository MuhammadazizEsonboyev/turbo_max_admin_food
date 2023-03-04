import React, { useEffect, useState } from 'react'
import '../Section/SectionDost.css'
import { Container, Row, Col } from 'react-bootstrap'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import axios from 'axios';
const cardimg = require('../../imagesDoston/Rectangle4.png')

const Section = () => {
    const [user, getUser] = useState([])


    const GetAllData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((data) => {
                getUser(data.data)
            })
    }
    useEffect(() => {
        GetAllData()
    }, [])
    return (
        <>
            <Container >
                <Row className='justify-content-center mb-5'>
                    <Col xs={7}>
                        <h2 className='project'>Projects</h2>
                        <h5 className='think'> Things I’ve built so far</h5>
                    </Col>
                </Row >
                <Row style={{display:'flex'}}>
                            {user?.map((data) => {
                                return (
                                    <>
                    <Col  xs={4}>
                        <div className="box" key={data.id}>
                                        <img src={cardimg} alt="" />
                                        <h2 className='cardTile'>{data.name} </h2>
                                        <p className='this'>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
                                        <h5 className='tech'><b>Tech stack</b> : HTML , JavaScript, SASS, React</h5>
                                        <div className="links">
                                            <div className="link">
                                                <LinkIcon />
                                                <h2 className='live'>Live Preview</h2>
                                            </div>
                                            <div className="link">
                                                <GitHubIcon />
                                                <h2 className='live'>View Code</h2>
                                            </div>
                                        </div>
                        </div>
                    </Col>
                    </>
                )
            })}
                </Row>
            </Container>
        </>
    )
}

export default Section
