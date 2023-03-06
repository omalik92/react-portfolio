import React from "react";
import ProjectCard from "../components/Card";
import { Container, Row, Col } from "react-bootstrap";
import projects from "../projects.json";

function ProjectGallery() {
  return (
    <div>
      <h1>Project Gallery</h1>
      <Container>
        <Row>
          {projects.map((project) => (
            <Col>
              <ProjectCard
                key={project.id}
                name={project.name}
                image={project.image}
                description={project.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProjectGallery;
