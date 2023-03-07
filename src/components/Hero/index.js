import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faReact,
  faHtml5,
  faCss3,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <div className="hero">
      <Container>
        <Row>
          <Col lg={6} className="description">
            <h1>Front End Web Design.</h1>
            <h5>Welcome to Omar's Portfolio Site! </h5>
            <p className="bodyText">
              As a front-end web developer, I specialize in creating beautiful,
              responsive websites that are both user-friendly and visually
              engaging. With a passion for design and a keen eye for detail, I
              am dedicated to delivering high-quality work that meets the needs
              of my clients and their users.
            </p>
            <br />
            <p>
              My portfolio showcases a variety of projects I have worked on,
              including websites for businesses, personal blogs, and e-commerce
              sites. Whether you are looking for a simple landing page or a
              full-scale website, I have the skills and expertise to bring your
              vision to life.
            </p>
          </Col>
          <Col lg={6}>
            <div className="profileImage">
              <img
                src={require("../../assets/images/ProfilePic.png")}
                alt="Omar"
                style={{
                  height: "250px",
                  width: "250px",
                  objectFit: "cover",
                  overflowClipMargin: "content-box",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "5px solid var(--navbar-text)",
                }}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="icons">
            <div className="iconContainer">
              <FontAwesomeIcon icon={faHtml5} className="icon" />
            </div>

            <div className="iconContainer">
              <FontAwesomeIcon icon={faCss3} className="icon" />
            </div>

            <div className="iconContainer">
              <FontAwesomeIcon icon={faSquareJs} className="icon" />
            </div>

            <div className="iconContainer rotate">
              <FontAwesomeIcon icon={faReact} className="icon" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
