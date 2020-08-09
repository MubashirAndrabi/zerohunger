import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">Navbar</Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
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
    </Navbar>
  );
}
export default Header;
