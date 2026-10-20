'use client';

import { Container, Nav, Navbar } from 'react-bootstrap';

const MiddleMenu = () => (
  <Navbar className="middlebar" expand="sm">
    <Container className="justify-content-center">
      <Nav className="middle-links flex-row flex-wrap justify-content-center">
        <Nav.Link href="#men">MEN</Nav.Link>
        <Nav.Link href="#women">WOMEN</Nav.Link>
        <Nav.Link href="#kids">KIDS</Nav.Link>
        <Nav.Link href="#brands">BRANDS</Nav.Link>
        <Nav.Link href="#search">SEARCH</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MiddleMenu;
