import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Button, Card, Spinner, Image, Container, Row, Col } from 'react-bootstrap';
import { CartContext } from '../compontents/CartContext';
import Footer from '../compontents/Footer';
import '../css/things.css'

const Things = () => {
  const [things, setThings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('http://localhost:5000/api/things')
      .then(res => {
        setThings(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch things", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center my-5"><Spinner animation="border" /></div>;

  return (
    <Container>
      <h2 className="text-center my-4">Pet Accessories</h2>
      <Row>
        {things.map((item, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card className="things-card h-100 d-flex flex-column text-light p-3">
              <div className="things-image-container">
                <Card.Img variant="top" src={`http://localhost:5000/${item.image}`} className="fixed-img mx-auto mt-2" />
              </div>
              <Card.Body className="d-flex flex-column justify-content-between w-100">
                <Card.Title className="text-warning text-center">{item.name}</Card.Title>
                <Card.Text className="things-details">
                  <strong>Type:</strong> {item.subCategory} <br />
                  <strong>Price:</strong> ₹{item.price} <br />
                  <strong>Description:</strong><br />
                  <span className="things-desc">{item.description}</span>
                </Card.Text>
              </Card.Body>
              <Button onClick={() => addToCart(item)} variant="warning" className="fw-semibold mt-auto">
                Add to Cart
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <Footer />
    </Container>
  );
};

export default Things;
