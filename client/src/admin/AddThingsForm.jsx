import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddThingForm = () => {
  const [form, setForm] = useState({
    name: '',
    category: 'things',
    subCategory: '',
    price: '',
    brand: '',
    description: '',
    image: null
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    await axios.post('http://localhost:5000/api/things', formData);
    alert('Thing was added');
    navigate('/admin-dashboard');
  };

  return (
    <Container className="mt-5">
      <h2>Add New Accessory/Thing</h2>
      <Button onClick={() => navigate('/admin-dashboard')}>Back</Button>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>SubCategory</Form.Label>
          <Form.Control name="subCategory" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Brand</Form.Label>
          <Form.Control name="brand" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" name="image" onChange={handleChange} required />
        </Form.Group>
        <Button className="mt-3" type="submit">Add Thing</Button>
      </Form>
    </Container>
  );
};

export default AddThingForm;
