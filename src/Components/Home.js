import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { bio } from "./Data";
import Typewriter from "typewriter-effect";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import HomeMe from "../Images/avtar1.avif";

const Home = () => {
  return (
    <section id="home">
      <div className="home-back">
        <Container>
          <Row className="h-center">
            <Col lg={6} style={{ paddingTop: "150px" }}>
              <h1 style={{fontSize:'45px'}}>
                Hi, I am Tanishka<br />
                <div style={{color:'rgb(1 105 130)'}}>
                {bio[0].name}
                </div>
              
              </h1>

              <h3>
              <div style={{ color: "rgb(4 117 144)" }}>
  
                <Typewriter
                    options={{
                      strings: bio[0].roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
  
                 
                </div>
               
              </h3>
              <div style={{ display: "flex", gap: "10px" }}>
                <a target="_blank" href="https://github.com/TanishkaAgrawal118?tab=repositories"  style={{ color: "black",fontSize:'30px'}}>
                    <FaGithubSquare/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/tanishka-agrawal-48453b22"  style={{ color: "black",fontSize:'30px'}}>
                <FaLinkedin/>
                </a>
                <a target="_blank" href="#"  style={{ color: "black",fontSize:'30px'}}>
                <FaTwitterSquare/>
                </a>
            </div>
            </Col>
            <Col
              lg={6}
              className="d-flex align-items-center"
              style={{ paddingTop: "50px" }}
            >
              <img
                src={HomeMe}
                alt="me"
                style={{
                  borderRadius: "50%",
                  width: "60%",
                  height: "auto",
                  margin: "auto",
                  marginTop:"40px",
                  paddingBottom:"20px",
                  // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)"
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <About></About>
      <Skills></Skills>
      <ProjectCards/> */}
    </section>
  );
};

export default Home;
