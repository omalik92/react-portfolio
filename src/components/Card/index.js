import React from "react";
import { Card, Button } from "react-bootstrap";

function ProjectCard(props) {
  const image = require(`../../assets/images/${props.image}`);
  return (
    <Card style={{ width: "21rem" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{
          height: "200px",
          aspectRatio: "auto",
          objectFit: "cover",
          overflowClipMargin: "content-box",
        }}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text style={{ whiteSpace: "pre-line" }}>
          {props.description}
        </Card.Text>
        {props.name === "Horiseon" ? <br /> : null}
        <Button variant="primary">Deployed Page</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
