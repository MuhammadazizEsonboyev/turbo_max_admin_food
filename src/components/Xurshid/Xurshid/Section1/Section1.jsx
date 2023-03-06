import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Section1.css"
const html = require("../img/HTML.png")
const css = require("../img/CSS.png")
const js = require("../img/JAVASCRIPT.png")
const jsx = require("../img/REACT.png")
const redux = require("../img/REDUX.png")
const bootstrap = require("../img/BOOTSTRAP.png")
const tailwind = require("../img/TAILWIND.png")
const sass = require("../img/SASS.png")
const git = require("../img/GIT.png")
const greensock = require("../img/GREENSOCK.png")
const vs_code1 = require("../img/VS_CODE.png")
const github = require("../img/GITHUB.png")












export default function Section1() {
  return (
    <>
        <Container>
            <Row>
                <Col xs={12}>
                    <h1 className='section1_tech'>My Tech Stack</h1>
                </Col>
                <Col xs={12}>
                    <p className='section1_p'> Technologies I’ve been working with recently</p>
                </Col>
              <div className="dastur_section1">

              <Col xs={2}>
                   <a href="https://en.wikipedia.org/wiki/HTML"> <img src={html} alt="" /></a>
                </Col>

                <Col xs={2}>
                    <a href="https://en.wikipedia.org/wiki/CSS"><img src={css} alt="" /></a>
                    
                </Col>

                <Col xs={2}>
                <a href="https://en.wikipedia.org/wiki/JavaScript">

                    <img src={js} alt="" />
                </a>

                </Col>

                <Col xs={2}>
                <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">

                    <img src={jsx} alt="" />
                </a>

                </Col>

                <Col xs={2}>
                <a href="https://en.wikipedia.org/wiki/Redux_(JavaScript_library)">

                    <img src={redux} alt="" />
                </a>

                </Col>

                <Col xs={2}>
                <a href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)">

                    <img src={bootstrap} alt="" />
                </a>

                </Col>
              </div>


              <div className="dastur1_section1">

<Col xs={2}>
    <a href="https://en.wikipedia.org/wiki/Tailwind_CSS">

      <img src={tailwind} alt="" />
    </a>
  </Col>

  <Col xs={2}>
    <a href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)">

      <img src={sass} alt="" />
    </a>
  </Col>

  <Col xs={2}>
  <a href="https://en.wikipedia.org/wiki/Git">

      <img src={git} alt="" />
  </a>

  </Col>

  <Col xs={2}>
  <a href="https://greensock.com/about/">

      <img src={greensock} alt="" />
  </a>

  </Col>

  <Col xs={2}>
  <a href="https://en.wikipedia.org/wiki/Visual_Studio">
      <img src={vs_code1} alt="" />

  </a>

  </Col>

  <Col xs={2}>
  <a href="https://uz.wikipedia.org/wiki/GitHub">

      <img src={github} alt="" />
  </a>

  </Col>
</div>
            </Row>
        </Container>
    </>
  )
}
