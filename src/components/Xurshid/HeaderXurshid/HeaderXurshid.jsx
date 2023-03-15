import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./headerXurshid.css";
const header_img = require("../img/Avatar.png")

export default function HeaderXurshid() {
  return (
    <div>
      <header>
        <Container>
          <Row>

            
            <Col xs={8}>
              <h1 className="header_h1">
                Hi, I am John, <br />
                Creative Technologist
              </h1>

              <p className="header_p">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet <br /> sint. Velit officia consequat duis enim velit
                mollit. Exercitation veniam <br /> consequat sunt nostrud amet.
              </p>

              <button className="header_button">Download Resume</button>
            </Col>

            <Col xs={4}>
                <img className="header_img1" src={header_img} alt="" />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}
