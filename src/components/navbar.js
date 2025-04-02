import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from '@mui/icons-material/Description';
import "../styles/navbar.css";
import Logo from './logo';

const NavigationBar = () => {
  return (
    <Navbar fixed="top" expand="md" className="navbar">
      <Container>
      <Navbar.Brand href="#">
        Mohit Saravanan</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#intro">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <Nav className="ml-auto social-icons">
            <Nav.Link href="mailto:mohitsara@gmail.com">
              <EmailRoundedIcon fontSize="medium" />
            </Nav.Link>
            <Nav.Link href="https://github.com/Sarava33" target="_blank">
              <GitHubIcon fontSize="medium" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/mohit-saravanan-51b7b5156/" target="_blank">
              <LinkedInIcon fontSize="medium" />
            </Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1EbqZGprqQDeAQLayl97y9k72tW7iqPcD/view?usp=sharing" target="_blank">
              <DescriptionIcon fontSize="medium" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;