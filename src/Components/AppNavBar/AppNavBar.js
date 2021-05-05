import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./AppNavBar.css";

export default function AppNavBar() {
  return (
    <Navbar collapseOnSelect bg="light" expand="md" className="mb-3 app-bar">
      <LinkContainer to="/">
        <Navbar.Brand >McDuck Inc.</Navbar.Brand>
      </LinkContainer>
      <LinkContainer to="/home">
        <Nav.Link class="nav-links">Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/blog">
        <Nav.Link>Cars</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/courses">
        <Nav.Link>Trucks</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/characters">
        <Nav.Link>Space Shuttles</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/characters-mui">
        <Nav.Link>Blog</Nav.Link>
      </LinkContainer>
      <Navbar.Toggle />
     
    </Navbar>

  );
}
