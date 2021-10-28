import React from 'react'
import {Navbar,Nav,Container} from "react-bootstrap";

function NavbarComponent() {
    return (
        <div className="NavbarComponent">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
              <Navbar.Brand href="#home">Code-club</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navbar-links">
                  <Nav.Link  href="#events">Events</Nav.Link>
                  <Nav.Link  href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#Contact Us">Contact Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
  </div>
    )
}

export default NavbarComponent