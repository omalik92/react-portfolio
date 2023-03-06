import React from "react";
import { Card, Button } from "react-bootstrap";

function ProjectCard(props) {
  const image = require(`../../assets/images/${props.image}`);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />

      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
