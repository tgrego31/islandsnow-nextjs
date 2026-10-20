'use client';

import { Row, Col } from 'react-bootstrap';

const FooterMenu = () => (
  <footer className="footer-menu">
    <Row className="text-center gy-3">
      <Col xs={12} md={4}><a href="#navigation">NAVIGATION</a></Col>
      <Col xs={12} md={4}><a href="#links">MAIN MENU</a></Col>
      <Col xs={12} md={4}><a href="#connect">CONNECT</a></Col>
    </Row>
  </footer>
);

export default FooterMenu;
