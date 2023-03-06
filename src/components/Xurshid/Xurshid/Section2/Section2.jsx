import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  Card, Col, Container, Row } from 'react-bootstrap'
import "./Section2.css"


export default function Section2() {

const [user, setUser] = useState([])




const GetData  = () => {
    axios.get("http://localhost:5000/data")
    .then((data) => {setUser(data.data)}
    )
}

useEffect(() => {
    GetData()
},[])
  return (
    <>
    <Container>
        <Row>

            <Col xs={12}>
                <h1 className='section2_h1'>Projects</h1>
            </Col>

            <Col xs={12}>
                <p className='section2_p'>Things I’ve built so far</p>
            </Col>
            {user?.map((data) => {
                return(
                    <>

           <Col xs ={4}>
         <div className='section2'>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  src={data.img}/>
      <Card.Body>
       <h1 className='section2h1'>Project Tile goes here</h1>
       <p className='section2p'>This is sample project description <br /> random things are here in <br /> description This is sample project <br /> lorem ipsum generator for dummy <br /> content</p>
       <p className='section2p_1'>Tech stack : HTML , JavaScript, SASS, React</p>
      
      <div className='h1'>
     <div className='github'>
     <i className="fa-brands fa-github"></i>
<p>Live Preview</p>
     </div>
    <div className='link'>
    <i className ="fa-solid fa-link"></i>
       <p>View Code</p>
    </div>
      </div>

      </Card.Body>
    </Card>
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
