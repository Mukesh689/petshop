import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../css/footer.css';
import Image from 'react-bootstrap/Image';


const Footer = () => {
  return (
    <footer className="footer-section mt-3" style={{border:'5px outset  #f25f5c'}}>      
    <Container>
        <Row className="pt-5 pb-4">
          {/* Logo & Socials */}
          <Col md={3} sm={12}>
            <div className="logo">
        <Image src='logo_black.png' height='30px' width='30px'/>
              <span className="logo-text">PetHouse</span>
              <p className="subtitle">Pet Boarding Center</p>
            </div>
            <div className="social-icons mt-3">
              <FontAwesomeIcon icon={faTwitter} className="icon" />
              <FontAwesomeIcon icon={faInstagram} className="icon" />
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </div>
          </Col>

          {/* About */}
          <Col md={3} sm={6}>
            <h5 className="footer-title">About</h5>
            <ul className="footer-list">
              <li><FontAwesomeIcon icon={faMapMarkerAlt} /> PO BOX Collins Street West</li>
              <li><FontAwesomeIcon icon={faPhone} /> +123 456 7890</li>
              <li><FontAwesomeIcon icon={faClock} /> Mon - Sun: 8AM - 8PM</li>
            </ul>
          </Col>

          {/* Quick Links */}
          <Col md={3} sm={6}>
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-list">
              <li>Dog Boarding Services</li>
              <li>Cat Boarding Services</li>
              <li>Spa and Grooming Services</li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col md={3} sm={12}>
            <h5 className="footer-title">Newsletter</h5>
            <Form>
              <Form.Control type="email" placeholder="Your email" className="mb-2" />
              <Button variant="danger" className="w-100">Subscribe</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
