import { Button, Stack } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "..//Bobur.css";
import { once } from "../DynamicCartOne";
const NextPage = () => {
  return (
    <section>
      <Container>
        {" "}
        <Stack className="bigBox1">
          <div className="row justify-content-end">
            <div className="col-2">
              <h1 className="hi">Works</h1>
            </div>
            <div className="col-2">
              <h1 className="hi">Blog</h1>
            </div>
            <div className="col-2">
              <h1 className="hi">Contact</h1>
            </div>
          </div>
        </Stack>
      </Container>

      <Container>
        <div className="bigger">
          <Row className="justify-content-between mt-5 ">
            <Col xs={4}>
              <h1>Hi, I am John, Creative Technologist</h1>
              <br />
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <br />
              <Button variant="contained">Download Resume</Button>
            </Col>
            <Col xs={4}>
              <img
                style={{ borderRadius: "50%" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYd0omtDBfA5NqelbCs0kc8E_SpZOVOoi_h3jm6do9qYLwIKYL3oVFv0os-d7W_NN2b4g&usqp=CAU"
                alt=""
              />
            </Col>
          </Row>
        </div>
      </Container>

      <Container>
        <div className="next">
          <Row className="justify-content-between">
            <Col xs={3}>
              <h1 className="recent">Recent posts</h1>
            </Col>
            <Col xs={3}>
              <Link to="https://google.com">
                <h1 className="all"> View all</h1>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>

      <Container>
        <Row className="justify-content-around mb-5">
          <Col xs={4}>
            <div class="card">
              <h5 class="card-header">Making a design system from scratch</h5>
              <br />
              <div class="card-body">
                <h5 class="card-title">12 Feb 2020 | Design, Pattern</h5>
                <p class="card-text">
                  <br />
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={4}>
            <div class="card">
              <h5 class="card-header">Creating pixel perfect icons in Figma</h5>
              <br />
              <div class="card-body">
                <h5 class="card-title">12 Feb 2020 | Figma, Icon Design</h5>
                <br />
                <p class="card-text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-start">
          <Col xs={3}>
            <h1>Featured works</h1>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-betweenfy">
          {once.map((item) => (
            <Col xs={4}>
             <div className="image">
                <img src={item.img} alt="" />
             </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NextPage;
