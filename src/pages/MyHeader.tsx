import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const MyHeader = () => {
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Navbar.Brand href="#"><i>Rajan Kumar Sah</i></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#aboutme">About Me</Nav.Link>
      <Nav.Link href="#academic">Academic</Nav.Link>
      <Nav.Link href="#experience">Experience</Nav.Link>
      <Nav.Link href="#query">Queries</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="https://github.com/IMRajanSah" target="_blank"><i className="fa fa-github"> Github</i></Nav.Link>
      <Nav.Link href="mailto:rajansah369@gmail.com" target="_blank"><i className="fa fa-envelope"> Mail Me</i></Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default MyHeader
