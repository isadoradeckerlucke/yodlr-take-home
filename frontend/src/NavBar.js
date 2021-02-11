import React from "react";
// import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Home
        </NavLink>

        <Nav className="ml-auto" navbar>
          {/* <NavItem>
            <NavLink to="/snacks">Snacks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/drinks">Drinks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/all-items/new">Add A New Item</NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink to="/admin">Admin</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
