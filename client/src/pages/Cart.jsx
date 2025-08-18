import React, { useContext } from 'react';
import { Container, Card, Row, Col, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../compontents/CartContext';
import Footer from '../compontents/Footer';

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-danger">Your cart is empty.</p>
      ) : (
        <Row className="g-4">
          {cartItems.map((item, index) => (
            <Col key={index} md={4} className="d-flex">
              <Card className="w-100 d-flex flex-column align-items-center p-3">
                <div style={{ height: '180px', width: '100%', overflow: 'hidden' }}>
                  <Image
        src={`http://localhost:5000/${item.image}`}
                    alt={item.name}
                    style={{ height: '100%', width: '100%', objectFit: 'fill' }}
                    fluid
                  />
                </div>
                <Card.Body className="d-flex flex-column text-center">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text className="mb-2">₹{item.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <div className="text-center mt-4">
        <h4>Total: ₹{total}</h4>
        <Button
          variant="success"
          onClick={() => navigate('/payment')}
          disabled={cartItems.length === 0}
        >
          Proceed to Payment
        </Button>
      </div>
      <Footer className=""/>
    </Container>
  );
};

export default Cart;
