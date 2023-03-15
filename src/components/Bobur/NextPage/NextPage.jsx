import { Button, Stack } from "@mui/material";
import axios from "axios";
// import 'animate.css';
import React, { useEffect, useState } from "react";
import { Accordion, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "..//Bobur.css";
const face = require("..//Img/fb.png");
const insta = require("..//Img/insta.png");
const twi = require("..//Img/Vector (2).png");
const git = require("..//Img/Linkedin (1).png");
const imgageOne =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_0YktZumnDWz05vaoM9zkHdSjYj21A7_38A&usqp=CAU";

const NextPage = () => {
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [comment, setComment] = useState();
  console.log(data);

  const getAllData = () => {
    axios
      .get("https://newrepository-production.up.railway.app/data")
      .then((res) => {
        setData(res?.data);
      });
  };

  const postUser = () => {
    axios
      .post("https://newrepository-production.up.railway.app/data", {
        name: name,
        comment: comment,
      })
      .then((data) => {
        console.log(data);
      });
  };

  const delete_func = (id) => {
    axios.delete(`https://newrepository-production.up.railway.app/data/${id}`)
    .then((res) => {
      alert("deleted")
      setData(data.filter((el) => el.id !== id));
    })

  };

  // const deleteData = (id) => {
  //   axios
  //     .delete(`http://localhost:3000/data/${id}`)
  //     .then((res) => alert("Successfully deleted"));
  //   setRows(rows.filter((el) => el.id !== id));
  // };
  useEffect(() => {
    getAllData();
  }, []);

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
              <h1 className="animate__animated animate__heartBeat">Hi, I am John, Creative Technologist</h1>
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
        <div style={{ background: "#EDF7FA" }} className="Bobur">
          <Row className="justify-content-around mb-5">
            <Col xs={4}>
              <div class="card">
                <h5 class="card-header">Making a design system from scratch</h5>
                <br />
                <div class="card-body">
                  <h5 class="card-title">12 Feb 2020 | Design, Pattern</h5>
                  <p class="card-text">
                    <br />
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={4}>
              <div class="card">
                <h5 class="card-header">
                  Creating pixel perfect icons in Figma
                </h5>
                <br />
                <div class="card-body">
                  <h5 class="card-title">12 Feb 2020 | Figma, Icon Design</h5>
                  <br />
                  <p class="card-text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <br />
              <br />
            </Col>
          </Row>
        </div>
      </Container>

      <Container>
        <Row className="justify-content-start ">
          <Col xs={3}>
            <h1>Featured works</h1>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-betweenfy mb-5 stsrt">
          <Col xs={3}>
            <img style={{ borderRadius: "20px" }} src={imgageOne} alt="" />
          </Col>
          <Col xs={9}>
            <h1>Designing Dashboards</h1>
            <hr />

            <button
              style={{
                borderRadius: "30px",
                padding: "9px 20px",
                background: "blue",
                color: "white",
                border: "none",
              }}
            >
              2020
            </button>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam vero, voluptates perspiciatis velit, quaerat accusantium
              voluptatum similique molestiae harum illo, doloribus provident
              sapiente! Molestiae architecto illo, autem odio quibusdam
              incidunt?
            </p>
            <Link to="https://efoodmarket.netlify.app">
              <h3 style={{ fontSize: "20px" }}>See</h3>
            </Link>
          </Col>
        </Row>
      </Container>

      <br />

      <Container>
        <Row className="justify-content-betweenfy stsrt">
          <Col xs={3}>
            <img style={{ borderRadius: "20px" }} src={imgageOne} alt="" />
          </Col>
          <Col xs={9}>
            <h1>Vibrant Portraits of 2020</h1>
            <hr />

            <button
              style={{
                borderRadius: "30px",
                padding: "9px 20px",
                background: "blue",
                color: "white",
                border: "none",
              }}
            >
              2018
            </button>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam vero, voluptates perspiciatis velit, quaerat accusantium
              voluptatum similique molestiae harum illo, doloribus provident
              sapiente! Molestiae architecto illo, autem odio quibusdam
              incidunt?
            </p>
            <Link to="https://weather-demo-website.netlify.app">
              <h3 style={{ fontSize: "20px" }}>See</h3>
            </Link>
          </Col>
        </Row>
      </Container>
      <br />

      <Container>
        <Row className="justify-content-betweenfy stsrt">
          <Col xs={3}>
            <img style={{ borderRadius: "20px" }} src={imgageOne} alt="" />
          </Col>
          <Col xs={9}>
            <h1>36 Days of Malayalam type</h1>
            <hr />

            <button
              style={{
                borderRadius: "30px",
                padding: "9px 20px",
                background: "blue",
                color: "white",
                border: "none",
              }}
            >
              2018
            </button>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam vero, voluptates perspiciatis velit, quaerat accusantium
              voluptatum similique molestiae harum illo, doloribus provident
              sapiente! Molestiae architecto illo, autem odio quibusdam
              incidunt?
            </p>
            <Link to="https://react-project123.netlify.app">
              <h3 style={{ fontSize: "20px" }}>See</h3>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center mt-5 mb-5">
          <Col xs={5}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Comment</Form.Label>
                <textarea
                  onChange={(e) => setComment(e.target.value)}
                  // value={value}
                  style={{ width: "100%", border: " 1px solid gray" }}
                  cols="30"
                  rows="10"
                ></textarea>
              </Form.Group>

              <Button
                style={{ width: "100%", borderRadius: "10px" }}
                variant="outlined"
                onClick={postUser}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={5}>
            {data?.map((item) => (
              <Accordion key={item.id}>
                <Accordion.Item  eventKey="0">
                  <Accordion.Header>{item?.name}</Accordion.Header>
                  <Accordion.Body>{item?.comment}</Accordion.Body>
                </Accordion.Item>
                <Button variant="outlined" color="error" onClick={() => delete_func(item.id)}>Delete</Button>
              </Accordion>
            ))}
          </Col>
        </Row>
      </Container>

      <hr style={{ color: "gray", marginBottom: "20px" }} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-1">
            <img src={face} alt="" />
          </div>
          <div className="col-1">
            <img src={insta} alt="" />
          </div>
          <div className="col-1">
            <img src={twi} alt="" />
          </div>
          <div className="col-1">
            <img src={git} alt="" />
          </div>
        </div>
        <h4
          style={{
            textAlign: "center",
            paddingTop: "20px",
            fontSize: "14px",
            paddingRight: "40px",
            marginBottom: "200px",
          }}
        >
          Copyright ©2020 All rights reserved
        </h4>
      </div>
    </section>
  );
};

export default NextPage;
