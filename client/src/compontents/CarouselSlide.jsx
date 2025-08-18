import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const CarouselSlide = () => {
  return (
    <div>
      <Carousel className="container">
        {/* Slide 1 */}
        <Carousel.Item className="slider">
          <Image src="uwp4639597.jpeg" className="d-block w-100" height="500px" />
          <Carousel.Caption>
            <div className="slide1">
              <h1><span>Hi, </span>We are Pawsitive</h1>
              <h2>PET SPA AND GROOMING</h2>
              <p>Your pets will also be exposed to plenty of human interaction</p>
              <Button variant="primary">Book Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item className="slider">
          <Image src="DeWatermark.ai_1752900839969.jpeg" className="d-block w-100" height="500px" />
          <Carousel.Caption>
            <div className="slide2">
              <h1><span>Luxury </span>Pet Boarding</h1>
              <h2>PET BOARDING AND CARE</h2>
              <p>Short term and long term pet board. Luxury dog kennels</p>
              <Button variant="success">Book Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item className="slider">
          <Image src='Ball-removebg-preview.png' height='50px' width='70px' className='ball' />
          <Image 
            src="bgremover/pexels-rdne-7516215-removebg-preview.png" 
            className="img3" 
            height="500px" 
            width="50%" 
          />
          <Carousel.Caption>
            <div className="slide3">
              <h1><span>Private</span> Kitty Playtime</h1>
              <h2>FUN EXERCISE AND ACTIVITIES</h2>
              <p>Cats enjoy private playtime, HDTV, A/C system and fresh air</p>
              <Button variant="warning">Book Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSlide;
