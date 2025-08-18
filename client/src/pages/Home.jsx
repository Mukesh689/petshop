import { Row, Col, Image, Container, Button, Card } from 'react-bootstrap';
import '../css/home.css';
import CarouselSlide from '../compontents/CarouselSlide';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Footer from '../compontents/Footer';
import { text } from '@fortawesome/fontawesome-svg-core';


const Home = () => {
  const [day, setDay] = useState(10);

  const handleChanges = (e) => {
    setDay(Number(e.target.value));
  };

  const totalAmount = day * 100;

  return (
    <div className='body'>
      <CarouselSlide />

      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <Image
              src="cat side.jpg"
              alt="Dog at check-in"
              fluid
              rounded />
          </Col>

          <Col md={6}>
            <h1>Check-in <span>Time</span></h1> <br />
            <div className="mb-4">
              <span><h2>FROM 8AM TO 10PM</h2></span>
              <p>
                Timings and drop-off after 8am and collection is before 10am on the mornings of going home.
              </p>
            </div>
            <div>
              <span><h2>FAVOURITE TOYS</h2></span>
              <p>
                Even though we're equipped with all sorts of toys, almost every dog has their favourites.
              </p>
            </div>
          </Col>
        </Row>
        <div className='row mt-3 mb-3'>
          <div className='col '>
            <Image src='DogFood.png' height='200px' />
            <h1>Custom Food</h1>
            <p>we serve only premium food.All meals are nutritionally balanced,to help your pet maintain a healthy lifestyle.</p>
            <Button>Book Now</Button>
          </div>
          <div className='col'>
            <Image src='Grooming.png' />
            <h1>Spa and Grooming</h1>
            <p>Pawsitive dedicated pet grooming area includes several experienced pet stylists,massage therapists and carers.</p>
            <Button>Book Now</Button>
          </div>
          <div className='col '>
            <Image src='Ball.png' />
            <h1>Activity and exercise</h1>
            <p>Dogs and cats are housed in two distinct buildings, with separate reverse cycle air-conditioning systems.</p>
            <Button>Book Now</Button>
          </div>
        </div>

        <div className='pet-shop'>
          <div className='text-center text-dark' style={{ fontSize: '50px' }}>
            <span>Taking A Vacation.</span>
            <h2>So Is Your Pet.</h2>
            <p style={{ fontWeight: 'bold', color: 'white', textShadow: '3px 1px 0 #000' }}>We offer long-term and short-term boarding. Every dog has its own private, spacious room and daily individual time in our large play yard.</p>
          </div>
        </div>
        <Row className='mt-3'>
          <Col >
            <Card className='card-top'>
              <h1>Pet Boarding</h1>
              <p>While you're on holiday, here's where your furry friends will spend their time.</p>
            </Card>
          </Col>

          <Col>
            <Card className='card-top'>
              <h1>Pet Daycare</h1>
              <p>Our certified staff has over a decade experience working in dog care.</p>
            </Card>
          </Col>

          <Col>
            <Card className='card-top'>
              <h1>Pet Transport</h1>
              <p>We welcome dogs of all shapes and sizes that meet safety requirements.</p>
            </Card>
          </Col>
        </Row>


        <div className='text-center mb-5 pt-3'>
          <h1><span>Services</span> Add-Ons</h1>
          <p>Discover a wide variety of Pawsitive services to choose from, including daycare, private walks, office duty and spa.</p>
        </div>

        <Row>
          <Col>
            <Image src='bed.png' />
            <h1>Dog Kennels</h1>
            <p>We offer long-term and short-term boarding. Every dog has its own private, spacious room, and spa.</p>
          </Col>

          <Col>
            <Image src='DogCircle.png' height='350px' />
          </Col>

          <Col>
            <Image src='dogshape.png' />
            <h1>Pet Nutrition</h1>
            <p>We serve only premium food. All meals are nutritionally balanced, to help your pet maintain a healthy lifestyle.</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Image src='catcircle.png' height='350px' />
          </Col>
          <Col>
            <Image src='belltoy.png' className='ms-5 ps-5 mx-auto' />
            <h1>Activity and exercise </h1>
            <p>Dogs and cats are housed in two distinct buildings, with separate reverse cycle air-conditioning systems.</p>
          </Col>
          <Col>
            <Image src='parrotcircle.png' height='350px' />
          </Col>
        </Row>
        <section className="petshop">
          <h1><span>The Best</span> Choice</h1>
          <p style={{ color: 'black', fontWeight: 'bold' }}>We offer long-term and short-term boarding. Every dog has its own private, spacious room and daily individual time in our large play yard.</p>

          <div className="pricing-container">
            <div className="pricing-card">
              <h3>PET CARE</h3>
              <h2>1 Day</h2>
              <img width="50" height="50" src="https://img.icons8.com/ios/50/cottage--v1.png" alt="cottage--v1" />
              <ul>
                <li>Single Room</li>
                <li>Socialise</li>
                <li>Brush</li>
                <li>Bring Your Own Food</li>
              </ul>
              <div className="price">$50</div>
            </div>

            <div className="pricing-card highlight">
              <h3>PET CARE</h3>
              <h2>10 Days</h2>
              <img width="50" height="50" src="https://img.icons8.com/ios/50/cottage--v1.png" alt="cottage--v1" />
              <ul>
                <li>Single Room</li>
                <li>Exercise</li>
                <li>Custom Meals</li>
                <li>Spa and Grooming</li>
              </ul>
              <div className="price">$350</div>
            </div>

            <div className="pricing-card">
              <h3>PET CARE</h3>
              <h2>20 Days</h2>
              <img width="50" height="50" src="https://img.icons8.com/ios/50/cottage--v1.png" alt="cottage--v1" />
              <ul>
                <li>Single Room</li>
                <li>Exercise</li>
                <li>Custom Meals</li>
                <li>Spa and Grooming</li>
              </ul>
              <div className="price">$500</div>
            </div>
          </div>
        </section>

        <Row>
          <Col>
            <Image src='ChatGPT Image Form.png' height='100%' width='100%' />
          </Col>
          <Col className='mt-5 pt-5'>
            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Get a quote</span>
            <h1>For pet boarding</h1>
            <Form>
              <FloatingLabel controlId="floatingSelect" label="YOUR PET">
                <Form.Select aria-label="Floating label select example">
                  <option>Open this select</option>
                  <option value="1">Cat</option>
                  <option value="2">Dog</option>
                  <option value="3">Parrot</option>
                  <option value="4">Other</option>
                </Form.Select>
              </FloatingLabel><br />

              <FloatingLabel controlId="floatingSelect" label="SERVICE">
                <Form.Select aria-label="Floating label select example">
                  <option>Open this select</option>
                  <option value="1">Bath</option>
                  <option value="2">Grooming</option>
                  <option value="3">Watching</option>
                </Form.Select>
              </FloatingLabel>

              <div className="slider-container">
                <label className="label text-white">NUMBER OF DAYS :<span className='thumb' width='100%' height="100%">{day}</span></label>
                <div className="range-wrapper">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="1"
                    value={day}
                    onChange={handleChanges}
                    className="custom-range" />
                </div>
                <div className="label text-light">TOTAL</div>
                <div className="total-amount">₹{totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  <div>
                    <Button className='me-5' onClick={()=>alert('We got your order.We contact you later..')}>Order</Button>
                  </div>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
