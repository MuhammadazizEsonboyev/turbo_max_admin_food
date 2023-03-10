import React from 'react'
import "./section.css"
import { Container, Row, Col } from 'react-bootstrap'
const html = require("../img/html.png")
const css  = require("../img/css.png")
const js = require("../img/js.png")
const boot = require("../img/bootsrap.png")
const vscode = require("../img/vscode.png")
const react = require("../img/react.png")
const lul = require("../img/lul.png")
const sas = require("../img/sas.png")
const atom = require("../img/atom.png")
const batman = require("../img/batman.png")
const ignore = require("../img/ignore.png")
const github = require("../img/github.png")

export default function Section() {
  return (
    <>
    <Container>
        <Row className='justify-content-center'>
            <Col xs={12}    >
                <h1 className='my'>My Tech Stack</h1>
                <h5 className='tech'> Technologies  I’ve  been  working  with  recently</h5>

            </Col>

            <Col xs={2}>
                    <img src={html} className="im"></img>
            </Col>
            <Col xs={2}>
                    <img src={css} className="im"></img>
            </Col>
            <Col xs={2}>
                    <img src={js} className="im"></img>
            </Col>
            <Col >
                    <img src={boot} className="im"></img>
            </Col>
            <Col>
                    <img src={vscode} className="im"></img>
            </Col>
            <Col>
                    <img src={react} className="im"></img>
            </Col>


{/*--------------------------------------------------------------------  */}
        <Row>
        <Col xs={2}>
                <img src={batman} className='mi'></img>
            </Col>

            <Col xs={2}>
                <img src={ignore} className='mi'></img>
            </Col>

            <Col xs={2}>
                <img src={sas} className='mi'></img>
            </Col>

            <Col xs={2}>
                <img src={lul} className='mi'></img>
            </Col>

            <Col xs={2}>
                <img src={atom} className='mi'></img>
            </Col>

            <Col xs={2}>
                <img src={github} className='mi'></img>
            </Col>
        </Row>
        </Row>
    </Container>
    </>
  )
}
