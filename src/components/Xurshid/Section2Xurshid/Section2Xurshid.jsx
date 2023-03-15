import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import "./section2Xurshid.css";
import DeleteIcon from '@mui/icons-material/Delete';
const imga = require("../img/img1.png");

export default function Section2Xurshid() {
  const [getdata, setGetdata] = useState();
  const [postn, setPost] = useState()
  const [comment, setComment] = useState()

  const getAllData = () => {
    axios.get("https://newrepository-production.up.railway.app/data")
    .then((res) => {
      setGetdata(res?.data)
    })
  };

  const postUsers = () => {
    axios.post("https://newrepository-production.up.railway.app/data", {name :  postn,post :  comment})
    .then((data) => {
alert(data.statusText)
setPost("")
    })
  }

 

  const deleteFunc = (id) => {
    axios.delete(`https://newrepository-production.up.railway.app/data/${id}`).then((res) =>{
       alert(res.statusText)
  })
    // rows.filter(id)
  }

  useEffect(() => {
    getAllData()
  },[])



  console.log(getAllData);
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="section_2">Featured works</h1>
          </Col>

          <Col>
            <Col xs={4}>
              <img className="img_s" src={imga} alt="" />
            </Col>
          </Col>

          <Col xs={8}>
            <h1 className="section2_h1">Designing Dashboards</h1>
            <div className="section2_div">
              <p className="section2_p2">Dashboard</p>
            </div>
            <p className="section2_p">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. <br />
              Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat <br /> sunt nostrud amet.
            </p>
          </Col>

          <Col>
            <Col xs={4}>
              <img className="img_s" src={imga} alt="" />
            </Col>
          </Col>

          <Col xs={8}>
            <h1 className="section2_h1">Vibrant Portraits of 2020</h1>
            <div className="section2_div">
              <p className="section2_p2">Illustration</p>
            </div>
            <p className="section2_p">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. <br />
              Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat <br /> sunt nostrud amet.
            </p>
          </Col>

          <Col>
            <Col xs={4}>
              <img className="img_s" src={imga} alt="" />
            </Col>
          </Col>

          <Col xs={8}>
            <h1 className="section2_h1">36 Days of Malayalam type</h1>
            <div className="section2_div">
              <p className="section2_p2">Typography</p>
            </div>
            <p className="section2_p">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. <br />
              Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat <br /> sunt nostrud amet.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" value={postn} onChange={(e) => setPost(e.target.value)} placeholder="Enter email" />
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <textarea value={comment}  onChange={(e) => setComment(e.target.value)}
                  cols="30"
                  rows="10"
                  style={{ width: "100%", border: "2px solid gray" }}
                ></textarea>
              </Form.Group>
              
              <Button style={{ width: "100%" }} className="button2" variant="primary"  onClick={postUsers}>
                Submit
              </Button>
            </Form>
        {getdata?.map((user) => {
          return (
            <>
   

                <Accordion>
      <Accordion.Item eventKey={user.id}>
        <Accordion.Header>Name{user.id}</Accordion.Header>
        <Accordion.Body>
                <ListGroup.Item ><b>Name:</b>{user.name}</ListGroup.Item>
                <ListGroup.Item ><b>Post:</b>{user.post}</ListGroup.Item>
         
                <DeleteIcon onClick={() => deleteFunc(user.id)} />
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>

                {/* <button >delete</button> */}
   

            </>
          )
        })}
         
          </Col>
        </Row>

       

      </Container>
    </div>
  );
}
