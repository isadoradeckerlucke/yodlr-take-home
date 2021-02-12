import React from "react";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <div>
      <Nav expand="md">
        <Nav.Item>
          <Nav.Link href="/" className="navbar-brand">
            Admin
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/signup" className="navbar-brand">
            Signup
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBar;
