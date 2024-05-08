import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "./Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ProjectCards = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section id="projects">
      <div style={{ backgroundColor: "rgb(244 219 251)", paddingBottom: "60px" }}>
        <Container>
          <h3 style={{ padding: "40px 0px" }}>PROJECTS</h3>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <Col key={index}>
                <div className="card project-back" style={{ margin: "20px" }} >
                  <img
                    className="card-img-top"
                    src={project.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{project.title}</h6>
                    <p className="card-text">{project.description}</p>
                    <a href={project.link} className="btn btn-primary btn-sm">
                      Github
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Slider>
        </Container>
      </div>
    </section>
  );
};

export default ProjectCards;
