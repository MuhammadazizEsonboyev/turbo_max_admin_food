import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./headerXurshid.css";
const avatar = require("../img/Avatar.png");

export default function HeaderXurshid() {
  return (
    <>
      <Container>
        <Row>
          <Col ls={10}>
            <Col xs={7}>
              <div className="header">
                <h1 className="header_h1">
                  Hi, I am John, <br />
                  Creative Technologist
                </h1>

                <p className="header_p">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet <br />
                  sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br />
                  consequat sunt nostrud amet.
                </p>

                <button className="header_button">Download Resume</button>
              </div>
            </Col>
          </Col>

          <Col ls={10}>
            <Col xs={4}>
              <div className="header_1">
                <img src={avatar} alt="" />
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}