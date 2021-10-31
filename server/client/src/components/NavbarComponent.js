import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar,Nav,Container} from "react-bootstrap";

import '../styles/Home.css';

function NavbarComponent() {
    return (
      <Navbar className="NavbarComponent" collapseOnSelect expand="lg" bg="light" style={{color: "black"}} variant="dark">
        <Container>
        <Navbar.Brand><NavLink activeClassName="active-link" style={{ textDecoration: "none", color: "black", fontWeight: "700", fontSize: "26px" }} to="/">{"C{ }de club"}</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{background: "linear-gradient(310deg,#7928ca,#ff0080)"}}/>
        
        <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="me-auto"></Nav>
          <Nav className="justify-content-end">
          <Nav.Link><NavLink activeClassName="active-link" style={{ textDecoration: "none", color: "black" }} to="/home">Home</NavLink></Nav.Link>
          <Nav.Link><NavLink activeClassName="active-link" style={{ textDecoration: "none", color: "black" }} to="/events">Events</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent