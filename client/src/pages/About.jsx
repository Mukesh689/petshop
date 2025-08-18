import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Button, Container, Row, Col, Image, Card } from 'react-bootstrap';
import Footer from '../compontents/Footer';
import '../css/about.css';

const About = () => {
  return (
    <div>
      <Container>
        <div className='aboutimg'>
          <div className='abouttitle'>
            <h3>ABOUT US</h3>
            <h1>The Standards Are Higher Here</h1>
            <Button>BOOK A TOUR</Button>
          </div>
        </div>

        <Card className='p-3 mt-4'>
          <h3>WHAT WE STAND FOR</h3>
          <h2>
            <span>We are invested in making </span>
            an incredible place
          </h2>
          <Row>
            <Col className='p-3'>
              <p>Our staff spends time interacting with and monitoring the pets to ensure their safety and happiness while they are with us.</p>
              <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </Col>
            <Col className='p-5'>
              <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>WELL-TRAINED STAFF</Accordion.Header>
                  <Accordion.Body>
                    Staff learn proper handling, signs, and symptoms of illness, dog expressions, and body language.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>METICULOUS ABOUT MEDS</Accordion.Header>
                  <Accordion.Body>
                    Snacks are available throughout the day and fresh water is constantly available.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>WHAT TO BRING</Accordion.Header>
                  <Accordion.Body>
                    If your dog has separation anxiety we encourage you to bring something that smells like home.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>

          <Row className='text-center mt-5'>
            <Col>
              <img width="50" height="50" src="icons8-heart-100.png" alt="heart" />
              <h2>OUR EMPLOYEES CARE</h2>
              <p>Leverage agile frameworks to provide a robust synopsis for high-level overviews. Iterative approaches foster collaborative thinking.</p>
            </Col>
            <Col>
              <img width="50" height="50" src="icons8-gift-100.png" alt="gift" />
              <h2>HAPPY ENVIRONMENT</h2>
              <p>Bring to the table win-win strategies to ensure proactive domination. A new normal that has evolved from the past generations.</p>
            </Col>
            <Col>
              <img width="50" height="50" src="icons8-trophy-100.png" alt="trophy" />
              <h2>WE ARE HERE TO STAY</h2>
              <p>Capitalize on low hanging fruit to identify a ballpark value added activity. Override the digital divide from DevOps highway.</p>
            </Col>
          </Row>
        </Card>

        <div className='team-section'>
          <h1 className='text-center mt-5'><span>Meet Our Team of</span></h1>
          <h1 className='text-center'>True Pet Lovers</h1>
          <p className='text-center'>We offer long-term and short-term boarding. Every dog has its own private, spacious room and daily individual time.</p>
          <Row className='text-center mt-4'>
            <Col>
              <Image src='Emilia.png' height='350px' />
              <h2>Emilia Johnson</h2>
              <h5 style={{ color: '#f55b5b' }}>PET INSTRUCTOR</h5>
            </Col>
            <Col>
              <Image src='peter.png' height='350px' />
              <h2>Peter Ronson</h2>
              <h5 style={{ color: '#f55b5b' }}>ASSISTANT</h5>
            </Col>
            <Col>
              <Image src='Barbra.png' height='350px' />
              <h2>Barbra Stevens</h2>
              <h5 style={{ color: '#f55b5b' }}>FOUNDER</h5>
            </Col>
          </Row>
        </div>

        <div className='centerimg mt-5'>
          <Row className='centerimg'>
            <Col>
              <h1><span>Happy to welcome you</span></h1>
              <h1>to our circle of friends</h1>

              <div className='centertag1'>
                <h3><span>ORGANISED TOURS</span></h3>
                <p>Tours of the facility are welcomed & highly advised if you plan on boarding your pet with us. We love showing off our fabulous resort and answering any queries you may have.</p>

                <h3><span>TOUR TIMING</span></h3>
                <p>For the safety & comfort of our guests, tour timings are strictly between 9am and 2pm, Saturday to Thursday.</p>
              </div>
            </Col>

            <Col>
              <Card className='text-center m-2 centertag2'>
                <div>
                  <h2 style={{ color: '#f25f5c' }}>Front desk</h2>
                  <h3>Saturday-Thursday, 9 AM to 6 PM</h3>
                </div>

                <div>
                  <h2 style={{ color: '#f25f5c' }}>Boarding check-in:</h2>
                  <h3>Saturday-Thursday, 9 AM to 6 PM</h3>
                </div>

                <div>
                  <h2 style={{ color: '#f25f5c' }}>Boarding check out:</h2>
                  <h3>Saturday-Thursday, 9 AM to 12 AM</h3>
                </div>

                <div>
                  <h2>Daycare:</h2>
                  <h3>7 AM to 7 AM</h3>
                </div>

                <h4>*No check-ins or check-outs on Friday</h4>
              </Card>
            </Col>
          </Row>
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default About;
