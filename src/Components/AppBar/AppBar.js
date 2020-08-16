import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppBar.module.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Form} from "react-bootstrap";
import FormControl from 'react-bootstrap/FormControl';
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const AppBar = () => (
  <div className={styles.AppBar}>
      <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">LSGD E-Governance</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link href={'/LSGD_FRONT/mainpage'}>Home</Nav.Link>
                  <Nav.Link >About</Nav.Link>
                  <Nav.Link href={'/'}>Login</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
              </Nav>
              <Form inline>

              </Form>
          </Navbar.Collapse>
      </Navbar>
  </div>
);

AppBar.propTypes = {};

AppBar.defaultProps = {};

export default AppBar;
