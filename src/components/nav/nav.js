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
      <Navbar
        className=""
        collapseOnSelect
        expand="md"
        bg="white"
        variant="dark"
      >
        <Container className="navContainer ">
          <Navbar.Brand
            className="logo-container m-0  "
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
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="header-nav-wrapper header-nav-folder-title "
          >
            <Nav className="justify-content-space-between  header-nav-item header-nav-folder-item  header-nav-item ">
              <Nav.Item className="">
                <Nav.Link href="https://indoteakdesign.com/#popup-menu-anchor-products">
                  PRODUCTS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://indoteakdesign.com/#popup-menu-anchor-products">
                  LOOKBOOK
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://indoteakdesign.com/#popup-menu-anchor">
                  INSPIRATIONS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://indoteakdesign.com/#popup-menu-anchor-products">
                  TRADE
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="link-2">ABOUT</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Link-3">CONTACT</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Link-4"> SEARCH</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar