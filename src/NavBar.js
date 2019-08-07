import React, { Component } from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
// import { connect } from 'react-redux';

class NavBar extends Component {
  render() {

    return (
      <div>
        <Navbar expand="md">
          <NavLink exact to="/" className="navbar-brand">
            Home
          </NavLink>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/new/">Add a New Post</NavLink>
            </NavItem>
          </Nav>

        </Navbar>
      </div>
    );
  }
}

export default NavBar