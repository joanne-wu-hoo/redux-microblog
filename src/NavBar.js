import React, { Component } from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
// import { connect } from 'react-redux';

class NavBar extends Component {
  render() {
    //console.log("got to nav bar render");
    //debugger; // is numItems working?
    return (
      <div>
        <Navbar expand="md">
          <NavLink exact to="/" className="navbar-brand">
            Home
          </NavLink>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/cart/">Cart ({this.props.numItems})</NavLink>
            </NavItem>
          </Nav>

        </Navbar>
      </div>
    );
  }
}