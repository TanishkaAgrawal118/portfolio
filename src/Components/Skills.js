import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { skills } from "./Data";

const Skills = () => {
  return (
    <section id="skills">
      <div style={{ backgroundColor: "#f1f5f9", paddingBottom: "80px" }}>
        <Container>
          <h3 style={{ padding: "40px 0px" }}>TECH STACK</h3>
          <div>
            <Row style={{ textAlign: "center" }}>
              {skills.map((skill, index) => (
                <Col lg={2} xs={6} sm={6} key={index} >
                  <span>{skill.icon}</span>
                  <h5 style={{ fontSize: "14px"}}>{skill.title}</h5>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Skills;
