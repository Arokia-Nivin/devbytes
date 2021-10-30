import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar,Nav,Container} from "react-bootstrap";

import '../styles/Home.css';

function NavbarComponent() {
    return (
      <Navbar className="NavbarComponent" collapseOnSelect expand="lg" bg="light" style={{color: "black"}} variant="dark">
        <Container>
        <Navbar.Brand><NavLink activeClassName="active-link" style={{ textDecoration: "none", color: "black", fontWeight: "700", fontSize: "26px" }} to="/">{"C{ }de club"}</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
          <Nav className="justify-content-end">
            <Nav.Link><NavLink activeClassName="active-link" style={{ textDecoration: "none", color: "black" }} to="/events">Events</NavLink></Nav.Link>
            <Nav.Link><NavLink activeClassName="active-link" style={{ textDecoration: "none", color: "black" }} to="/contact">Contact</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent