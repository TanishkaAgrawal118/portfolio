import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-scroll";
const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg"  fixed="top" className="sticky-top nav-back" style={{ boxShadow:'0px 5px 5px -5px rgba(0, 0, 0, 0.5)',backgroundColor:'#f4f4f5'}}>
      <Container >
      <h2 className='text-3xl font-bold'>
                Tani<span style={{color:'rgb(1 105 130)'}}>shka</span>
            </h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={50}
            >
              <Nav.Link className="navhead" style={{fontWeight:'bold'}}>Home</Nav.Link>
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={50}
            >
              <Nav.Link className="navhead" style={{fontWeight:'bold'}}>About</Nav.Link>
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={50}
            >
              <Nav.Link className="navhead" style={{fontWeight:'bold'}}>Skills</Nav.Link>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={50}
            >
              <Nav.Link className="navhead" style={{fontWeight:'bold'}}>Projects</Nav.Link>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={50}
            >
              <Nav.Link className="navhead" style={{fontWeight:'bold'}}>Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

