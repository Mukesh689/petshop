import React, { useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../compontents/CartContext';
import { useNavigate } from 'react-router-dom';
import {Container,Form,Button,Alert,Card,} from 'react-bootstrap';
import Footer from './Footer';

const Payment = () => {
  const { getTotalAmount, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Regex Validation
  const validateForm = () => {
    let newErrors = {};

    // Name validation: Only letters and spaces
    if (!/^[A-Za-z ]{3,}$/.test(formData.name)) {
      newErrors.name = 'Name must contain only letters (min 3 chars)';
    }

    // Card number validation: 16 digits (spaces optional)
    if (!/^\d{4} ?\d{4} ?\d{4} ?\d{4}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }

    // Expiry validation: MM/YY format
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry)) {
      newErrors.expiry = 'Expiry must be in MM/YY format';
    }

    // CVV validation: 3–4 digits
    if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'CVV must be 3 or 4 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop if invalid

    try {
      const res = await axios.post('http://localhost:5000/api/payment', formData);
      setFormData({ name: '', cardNumber: '', expiry: '', cvv: '' });
      setMessage(res.data.message);
      clearCart();
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setMessage('Payment failed. Please try again.');
    }
  };

  return (
    <Container>
      <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-dark">
        <Card className="p-4 bg-black text-light shadow" style={{ width: '100%', maxWidth: '450px' }}>
          <h3 className="text-warning text-center mb-4">Payment Details</h3>

          {message && <Alert variant="info" className="text-center">{message}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label className="text-secondary fw-semibold">Card Holder Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent text-light border-secondary"
              />
              {errors.name && <p className="error text-danger">{errors.name}</p>}
            </Form.Group>

            <Form.Group controlId="cardNumber" className="mb-3">
              <Form.Label className="text-secondary fw-semibold">Card Number</Form.Label>
              <Form.Control
                type="text"
                name="cardNumber"
                placeholder="0000 0000 0000 0000"
                value={formData.cardNumber}
                onChange={handleChange}
                className="bg-transparent text-light border-secondary"
              />
              {errors.cardNumber && <p className="error text-danger">{errors.cardNumber}</p>}
            </Form.Group>

            <Form.Group controlId="expiry" className="mb-3">
              <Form.Label className="text-secondary fw-semibold">Expiry Date</Form.Label>
              <Form.Control
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                className="bg-transparent text-light border-secondary"
              />
              {errors.expiry && <p className="error text-danger">{errors.expiry}</p>}
            </Form.Group>

            <Form.Group controlId="cvv" className="mb-4">
              <Form.Label className="text-secondary fw-semibold">CVV</Form.Label>
              <Form.Control
                type="password"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleChange}
                className="bg-transparent text-light border-secondary"
              />
              {errors.cvv && <p className="error text-danger">{errors.cvv}</p>}
            </Form.Group>

            <Button
              variant="warning"
              type="submit"
              className="w-100 fw-semibold"
            >
              Pay ₹{getTotalAmount()}
            </Button>
          </Form>
        </Card>
      </Container>
      <Footer />
    </Container>
  );
};

export default Payment;
