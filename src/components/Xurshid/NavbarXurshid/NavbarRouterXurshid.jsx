

import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import "./navbarXurshid.css"

export default function NavbarRouter() {

  return (



    <>
    <Container>
      <Row>


        <Col xs={7}>

        </Col>
        <Col xs={3}>
       <div className="navbar">




       <Nav.Item>

</Nav.Item>
    

<Nav.Item>
<Nav.Link>Works</Nav.Link>
</Nav.Item>
 

<Nav.Item>
<Nav.Link>Blog</Nav.Link>
</Nav.Item>
 


<Nav.Item>
<Nav.Link>Contact</Nav.Link>
</Nav.Item>
 



       </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}




// import React from 'react'
// import { Col, Container, Nav, Row } from 'react-bootstrap'
// import "./navbarXurshid.css"

// export default function NavbarRouter() {
//   const Xurshid = [
//     {
      
//     li : "Works",
//     href : "https://www.w3schools.com/html/"
//     },

//     {
//       li : "Blog",
//       href : "https://www.w3schools.com/css/"
//       },

//       {
//         li : "Contact",
//         href : "https://www.w3schools.com/js/"
//       }


//   ]
//   return (



//     <>
//     <Container>
//       <Row>


//         <Col xs={9}>

//         </Col>
//         <Col xs={3}>
//        <div className="navbar">
//       {Xurshid.map(({li,href}) => (

// <Nav.Item>
// <Nav.Link  href={href}>{li}</Nav.Link>
// </Nav.Item>
 

// ))}

//        </div>
//         </Col>
//       </Row>
//     </Container>
//     </>
//   )
// }
