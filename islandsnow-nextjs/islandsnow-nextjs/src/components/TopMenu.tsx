'use client';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Facebook, Twitter, Pinterest, Instagram, HouseFill, Search, PersonFill, Cart } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar className="topbar py-0" bg="light">
    <Container className="topbar-inner d-flex justify-content-between align-items-center">
      <Nav className="align-items-center social-menu flex-row">
        <Nav.Link href="#" aria-label="Facebook"><Facebook /></Nav.Link>
        <Nav.Link href="#" aria-label="Twitter"><Twitter /></Nav.Link>
        <Nav.Link href="#" aria-label="Pinterest"><Pinterest /></Nav.Link>
        <Nav.Link href="#" aria-label="Instagram"><Instagram /></Nav.Link>
      </Nav>
      <Nav className="align-items-center account-menu flex-row">
        <Nav.Link href="#" aria-label="Home"><HouseFill /></Nav.Link>
        <Nav.Link href="#" aria-label="Search"><Search /></Nav.Link>
        <Nav.Link href="#" aria-label="Account"><PersonFill /></Nav.Link>
        <NavDropdown align="end" title={<><Cart /> <span className="cart-count">0</span></>} id="cart-menu">
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

export default TopMenu;
