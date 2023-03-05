import React from 'react'
import { Container, Col,  Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinksStorage } from '../../LinksStorage.jsx'
import "././NavBarPage.css"
// import 'bootstrap/dist/css/bootstrap.min.css'
const GitHubLogo = require('../../img/Vector (11).png')
const Insta = require('../../img/Vector (10).png')
const logo = require('../../img/logo 1.png')
const youtube = require("../../img/Vector (9).png")

export default function NavBarPage() {
  return (
    <>


      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Row className='justify-content-between mb-1'>
            <Col xs={3}>
              <div className="LogoBox">
                <img src={logo} alt="" />
              </div>
            </Col>
                <Col xs={6}>
                  <div  className='linkBox' style={{marginLeft:"60px"}} >
                  {
                    LinksStorage.map((val) => {
                      return (
                        <li style={{ listStyle: "none" , marginTop:"10px"}}>
                          <Link style={{ color: "white", textDecoration: "none", marginBottom: "100px", paddingLeft: "80px" }}>
                            {val.title}
                          </Link>
                        </li>
                      )
                    })
                  }
                  </div>
                </Col>
                <Col xs={3}>
                  <div className='Icons-Box' style={{margin:"5px 0px 0px 80px"}}>
                    <a href="https://github.com/Asadbecck">
                      <img  src={GitHubLogo} alt="" />
                      </a>
                      <a style={{paddingLeft:"20px"}} href="https://www.instagram.com/google_ti_mamy_mav/">
                      <img  src={Insta} alt="" />
                      </a>
                      <a style={{paddingLeft:"20px"}} href="https://www.youtube.com/@toplesofficial">
                      <img  src={youtube} alt="" />
                      </a>
                  </div>
                </Col>
          </Row>
        </Container>
      </Navbar>


    </>
  )
}
