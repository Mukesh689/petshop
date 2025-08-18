import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../compontents/CartContext';
import axios from 'axios';
import { Card, Button, Spinner, Container, Row, Col, Image } from 'react-bootstrap';
import Footer from '../compontents/Footer';
import '../css/pet.css';

const Pet = () => {
  const { addToCart } = useContext(CartContext);
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/pets')
      .then(res => {
        setAnimals(res.data);  // all pets
        setLoading(false);
      })
      //   .then(res => {
      //   setAnimals(res.data.filter(p => p.category === 'animals'));
      //   setLoading(false);
      // })
      .catch(err => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <h2 className='text-center my-4'>Available Pets</h2>
      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" />
        </div>
      ) : animals.length === 0 ? (
        <p className="text-center text-danger">No pets found.</p>
      ) : (
        <Row>
          {animals.map((item, idx) => (
            <Col key={idx} md={6} lg={4} className="mb-4 d-flex">
  <Card className="pet-card w-100 d-flex flex-column">
    <div className="pet-image-container">
      <Image
        src={`http://localhost:5000/${item.image}`}
        alt={item.name}
        className="pet-image"
        fluid
      />
    </div>
    <Card.Body className="d-flex flex-column justify-content-between text-center">
      <Card.Title className="pet-title">{item.name}</Card.Title>
      <Card.Text className="pet-details mb-2">
        <strong>Breed:</strong> {item.breed}<br />
        <strong>Age:</strong> {item.age}<br />
        <strong>Description:</strong> {item.description}<br />
        <strong>Price:</strong> ₹{item.price}
      </Card.Text>
      <Button onClick={() => addToCart(item)} variant="warning" className="mt-auto">
        Add to Cart
      </Button>
    </Card.Body>
  </Card>
</Col>

          ))}
        </Row>
      )}
      <Footer />
    </Container>
  );
};

export default Pet;
