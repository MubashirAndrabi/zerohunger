import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <Navbar expand="lg" sticky="top">
      <Navbar.Brand>
        <Link to="/">
          {
            <img
              src={Logo}
              alt="logo"
              width="200"
              className="d-inline-block align-middle mr-2"
            />
          }
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link className="mr-3" href="/" >Home</Nav.Link>
          <Nav.Link className="mr-3" href="/about">About Us</Nav.Link>
          <Nav.Link className="mr-3" href="/about">Contact</Nav.Link>
          <Nav.Link className="mr-4">Voulnteer</Nav.Link>
        </Nav>
        <NavDropdown title="Sign Up" id="basic-nav-dropdown" className="mr-4 ml-4">
          <NavDropdown.Item href="/register">SignUp</NavDropdown.Item>
          <NavDropdown.Item  href="/login">Login</NavDropdown.Item>
          <NavDropdown.Item>Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item> Separated link</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
