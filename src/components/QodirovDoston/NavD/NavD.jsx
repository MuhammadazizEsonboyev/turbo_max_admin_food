import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../NavD/NavD.css"
import project1 from '../Images/projctScreenshot from 2023-03-12 18-26-381.png'
import project2 from '../Images/projctScreenshot from 2023-03-12 18-27-022.png'
import project3 from '../Images/projctScreenshot from 2023-03-12 18-27-273.png'
import project4 from '../Images/projctScreenshot from 2023-03-12 18-27-374.png'
import project5 from '../Images/projctScreenshot from 2023-03-12 18-27-495.png'
import project6 from '../Images/projctScreenshot from 2023-03-12 18-28-056.png'
import project7 from '../Images/projctScreenshot from 2023-03-12 18-28-578.png'
import project8 from '../Images/projctScreenshot from 2023-03-12 18-29-309.png'

const data = [
  {
    id: 1,
    img:project1,
    title: "Mem ipsum dolor sit amet consectetur adipisicing elit. Neque, enim!",
    GitHub: "https://github.com/QodirovDoston/weather_app_demo",
    demo: "https://vocal-gnome-e91268.netlify.app",
  },
  {
    id: 2,
    img:project2,
    title: "Morem ipsum dolor sit amet consectetur adipisicing elit. Neque, enim!",
    GitHub: "https://github.com/QodirovDoston/zakas_telogram",
    demo: " https://stellular-narwhal-b3fe08.netlify.app",
  },
  {
    id: 3,
    img:project3,
    title: "Eorem ipsum dolor sit amet consectetur adipisicing elit. Neque, enim!",
    GitHub: "https://github.com/QodirovDoston/pianino.Html",
    demo: "https://bright-cranachan-e049f1.netlify.app",
  },  {
    id: 4,
    img:project4,
    title: "qodirov Lorem ipsum dolor sit adipisicing elit!",
    GitHub: "https://github.com/QodirovDoston/Karochi_ob_havo",
    demo: "https://precious-malabi-c99075.netlify.app",
  },  {
    id: 5,
    img:project5,
    title: "Ipsum dolor sit amet consectetur adipisicing elit!",
    GitHub: "https://github.com/QodirovDoston/demo.figma",
    demo: "https://fantastic-cocada-776970.netlify.app",
  }
  ,  {
    id: 6,
    img:project6,
    title: "Orem ipsum dolor sit amet consectetur adipisicing elit!",
    GitHub: "https://github.com/QodirovDoston/admin-panel",
    demo: "https://willowy-panda-6084a8.netlify.app",
  },
    {
    id: 7,
    img:project7,
    title: "Polor sit amet consectetur adipisicing elit!",
    GitHub: "https://github.com/QodirovDoston/admin-panel",
    demo: "https://melodic-sable-ee3e9f.netlify.app/table",
  }
  ,
    {
    id: 8,
    img:project8,
    title: "Dolor sit amet consectetur adipisicing elit!",
    GitHub: "https://github.com/QodirovDoston/search",
    demo: "https://mellow-dango-20fbed.netlify.app",
  }
]

const NavD = () => {
  return (
    <>
    <section id='works'>
    <div className='otang'>
      <Container className='dost  mt-5'>
        <h6 className='fut'>Featured works</h6>
        {data.map(({id,img, title,GitHub,demo})=>{
          return(
            <>
        <Row key={id} id='dost' className='justify-content-between mt-5'>
          <Col xs={3}>
            <img className='imgfed' src={img} alt="" />
          </Col>
          <Col xs={6}>
            <div className="nimadur">
              <h1>{title}</h1>
              <div className="ikita">
                <a href={GitHub}>
                <button  className='btn'>Github</button>
                </a>
                <a  href={demo}>
                <small style={{listStyle:'none',color:'black'}}  className='dash'>Live Demo</small>
                </a>
              </div>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </Col>
        </Row>
            </>
          )
        })}
            <hr/>
      </Container>
    </div>
    </section>
    </>
  )
}

export default NavD
