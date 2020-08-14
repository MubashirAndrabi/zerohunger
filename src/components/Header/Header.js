import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <Navbar expand="lg">
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
          <Nav.Link>
            <Link to="/"> Home </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about"> About </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/howitworks"> How it works </Link>
          </Nav.Link>
        </Nav>
        <NavDropdown title="Click Me" id="basic-nav-dropdown">
          <NavDropdown.Item>SignUp</NavDropdown.Item>
          <NavDropdown.Item>Login</NavDropdown.Item>
          <NavDropdown.Item>Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item> Separated link</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
