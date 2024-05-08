import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Paper } from "@mui/material";
import HomeMe from "../Images/avtar7.avif";

const About = () => {
  const [activeSection, setActiveSection] = useState("aboutMe");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const getContent = () => {
    switch (activeSection) {
      case "aboutMe":
        return (
          <p className="about-content">
          Productivity is my priority. Driven by a strong passion for
          problem-solving. I have consistently demonstrated myself as a
          dedicated and committed student. This unwavering dedication
          has allowed me to excel in my studies, optimize my learning
          process, and develop strong time management skills.<br/>In addition to my academic pursuits, I have a keen interest in exploring new technology and learning something new every day. I am fascinated by the rapid pace of technological advancement and am eager to stay at the forefront of innovation.
        
        </p>
        );
      case "education":
        return (
         
                  <p className="about-content">
                   <ul>
                    <div className="liItem">
                    <h5 className="liItems">B.Tech in Computer Science</h5>
                    <h6 style={{fontSize:'15px'}}>IPS Academy, Indore</h6>
                    <h6 style={{fontSize:'14px'}}>2021-2025 || CGPA:9.47</h6>
                    </div>
                    <div className="liItem">
                    <h5 className="liItems">Class XII</h5>
                    <h6 style={{fontSize:'15px'}}>Raghuwansh Public School,Sendhwa</h6>
                    <h6 style={{fontSize:'14px'}}>2020-2021 || Percentage:95.3%</h6>
                    </div>
                    <div className="liItem">
                    <h5 className="liItems">Class XI</h5>
                    <h6 style={{fontSize:'15px'}}>Raghuwansh Public School, Sendhwa</h6>
                    <h6 style={{fontSize:'14px'}}>2018-2019 || Percentage:90.3% </h6>
                    </div>
                   </ul>
                </p>
        );
      case "achievement":
        return (
         
                <p className="about-content">
                 <ul>
                  <li className="liItems">
                  150+ questions of DSA
                  </li>
                  <li  className="liItems"> Secured 1st Position in Academics</li>
                  <li  className="liItems">Participated in National Level Hackathon 2023 </li>
                  <li  className="liItems">Secured 6th position in Rajasthan State Level Hackathon 2023 </li>
                  <li  className="liItems">Smart India Hackathon 2023 Finalist</li>
                  </ul> 
                </p>
             
        );
      default:
        return null;
    }
  };

  return (
    <section id="about">
<div style={{ height: "auto", backgroundColor: "rgb(244 219 251)",paddingBottom:'20px'}}>
      <Container>
        <h2 style={{ textAlign: "center", padding: "20px" }}>About</h2>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <h6
            onClick={() => handleSectionChange("aboutMe")}
            className={`abouthead ${
              activeSection === "aboutMe" ? "active" : ""
            }`}
          >
            ABOUT ME
          </h6>
          <h6
            onClick={() => handleSectionChange("education")}
            className={`abouthead ${
              activeSection === "education" ? "active" : ""
            }`}
          >
            EDUCATION
          </h6>
          <h6
            onClick={() => handleSectionChange("achievement")}
            className={`abouthead ${
              activeSection === "achievement" ? "active" : ""
            }`}
          >
            ACHIEVEMENT
          </h6>
        </div>
        <div>
        <Paper
            elevation={1}
            // className={`paperAnimation`}
            style={{
              height: "auto",
              padding: "20px",
              marginTop:"18px",
              // margin: "20px",
              backgroundColor: "white",
            }}
          >
            <Row>
              <Col lg={6} className="d-flex align-items-center">
                <img
                  src={HomeMe}
                  alt="me"
                  style={{
                    width: "70%",
                    height: "auto",
                    margin: "auto",
                  }}
                />
              </Col>
              <Col lg={6} style={{ padding: "10px" }}>
               {getContent()}
              </Col>
            </Row>
          </Paper>
        </div>
      </Container>
    </div>
    </section>
    
  );
};

export default About;
