import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Section.css"
const HTML = require("../../img/vscode-icons_file-type-html.png")
const CSS =  require("../../img/vscode-icons_file-type-css.png")
const JS = require("../../img/vscode-icons_file-type-js-official.png")
const react = require("../../img/logos_react.png")
const Mui = require("../../img/Vector.png")
const bootstrap = require("../../img/logos_bootstrap.png")
const wave = require("../../img/vscode-icons_file-type-tailwind.png")
const sass = require('../../img/logos_sass.png')
const react_icons = require("../../img/logos_git-icon.png")
const person  = require('../../img/cib_greensock.png')
const VScode = require("../../img/vscode-icons_file-type-vscode.png")
const Git= require('../../img/akar-icons_github-fill.png')





export default function MainSection() {
  return (
    <>
    <Container>
        <Row className='justify-content-center'>
            <Col xs={12}>
                <div className='Tools-Info'>
                    <h1 className='Tech-Stack'>
                    My Tech Stack
                    </h1>
                </div>
                    <h4 className='Working-With'> Technologies I’ve been working with recently</h4>
            </Col>
        </Row>
        <div className='Main-Tools'>

        <Row >
                    <Col xs={2}>
                    <img src={HTML} alt="" />
                    </Col>
                    <Col xs={2}>
                    <img src={CSS} alt="" />
                    </Col>
                    <Col xs={2}>
                    <img src={JS} alt="" />
                    </Col>
                    <Col xs={2}>
                    <img src={react} alt="" />
                    </Col>
                    <Col xs={2}>
                    <img src={Mui} alt="" />
                    </Col>
                    <Col xs={2}>
                    <img src={bootstrap} alt="" />
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col xs={2}>
                    <img src={wave} alt="" />
                    </Col>
                    <Col xs={2}>
                    <img src={sass} alt="" />
                    </Col>
                    <Col xs={2}>
                    <img src={react_icons} alt="" />
                    </Col>
                    <Col xs={2}>
                    <img src={person} alt="" />
                    </Col>
                    <Col xs={2}>
                    <img src={VScode} alt="" />
                    </Col>
                    <Col xs={2}>
                    <img src={Git} alt="" />
                    </Col>
                </Row>
        </div>
    </Container>
    </>
  )
}
