import React, { useState } from 'react';
import axios from 'axios';
import '../css/contact.css'
import Footer from '../compontents/Footer';
import { Container } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      alert("Error sending message.");
    }
  };

  return (
    <div className='container'>
      <Container className="contact-form">
        <h2 className='text-dark'>Contact Us</h2>
      <form onSubmit={handleSubmit} className=''>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
      </Container>
      <Footer/>
    </div>
  );
};

export default Contact;
