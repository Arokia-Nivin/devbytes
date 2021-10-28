import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar,Nav,Container} from "react-bootstrap";

function NavbarComponent() {
    return (
        <div className="NavbarComponent">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
              <Navbar.Brand><NavLink style={{ textDecoration: "none", color: "white" }} to="/">Code-club</NavLink></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navbar-links">
                  <Nav.Link><NavLink style={{ textDecoration: "none", color: "white" }} to="/events">Events</NavLink></Nav.Link>
                  <Nav.Link><NavLink style={{ textDecoration: "none", color: "white" }} to="/projects">Projects</NavLink></Nav.Link>
                  <Nav.Link><NavLink style={{ textDecoration: "none", color: "white" }} to="/contact">Contact</NavLink></Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
  </div>
    )
}

export default NavbarComponent