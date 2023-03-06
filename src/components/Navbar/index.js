import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/js/dist/collapse.js";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar className="p-0" expand="md">
      <Navbar.Brand as={Link} to="/Home">
        OZ Technologies.
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/home" className="hover-underline-animation">
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/project-gallery"
            className="hover-underline-animation"
          >
            Project Gallery
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            className="hover-underline-animation"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
