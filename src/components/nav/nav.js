import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "./indoteak.png";

import nav from "./nav.css"
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  return (
    <>
      <Navbar className='' collapseOnSelect expand="md" bg="light" variant="dark">
        <Container>
          <Navbar.Brand
            className="logo-container py-0"
            href="https://indoteakdesign.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            className="toggle"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link href="https://indoteakdesign.com/#popup-menu-anchor-products">
                  PRODUCTS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://indoteakdesign.com/#popup-menu-anchor">
                  INSPIRATION
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">TRADE</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Link-3">SAMPLE</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Link-4"> CONTACTS</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar