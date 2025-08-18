import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/adminDashboard.css';
import Footer from '../compontents/Footer';

const AdminDashboard = () => {
  const [pets, setPets] = useState([]);
  const [foods, setFoods] = useState([]);
  const [things, setThings] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchPets();
    fetchFoods();
    fetchThings();

  }, []);

  const fetchPets = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/pets');
      setPets(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchFoods = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/foods');
      setFoods(res.data);
    } catch (err) {
      console.error(err);
    }
  };

    const fetchThings = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/things');
      setThings(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeletePet = async (id) => {
    if (!window.confirm('Delete this pet?')) return;
    await axios.delete(`http://localhost:5000/api/pets/${id}`);
    fetchPets();
  };

  const handleDeleteFood = async (id) => {
    if (!window.confirm('Delete this food?')) return;
    await axios.delete(`http://localhost:5000/api/foods/${id}`);
    fetchFoods();
  };

   const handleDeleteThing = async (id) => {
    if (!window.confirm('Delete this Things?')) return;
    await axios.delete(`http://localhost:5000/api/things/${id}`);
    fetchThings();
  };

  // const handleEditPet = (id) => navigate(`/edit-pet/${id}`);
  // const handleEditFood = (id) => navigate(`/edit-food/${id}`);
  // const handleEditThing = (id) => navigate(`/edit-things/${id}`);


  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin Inventory Dashboard</h2>
        <div>
          <Button variant="success" className="me-2" onClick={() => navigate('/add-food')}>+ Add Food</Button>
          <Button variant="primary" className="me-2" onClick={() => navigate('/add-pet')}>+ Add Pet</Button>
          <Button variant="secondary" onClick={() => navigate('/add-things')}>+ Add Things</Button>
        </div>
      </div>

      {/* Pets Section */}
      <h4 className="text-primary">Pets</h4>
      <Row>
        {pets.map((pet, i) => (
          <Col key={i} xs={12} sm={6} md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Img variant="top" src={`http://localhost:5000/${pet.image}`} className="fixed-img mx-auto mt-2" />
              <Card.Body>
                <Card.Title>{pet.name}</Card.Title>
                <Card.Text>
                  <strong>Breed:</strong> {pet.breed}<br />
                  <strong>Price:</strong> ₹{pet.price}<br />
                  <strong>Age:</strong> {pet.age}<br />
                  <strong>Category:</strong> {pet.category} / {pet.subCategory}<br />
                  {pet.description}
                </Card.Text>
                <div className="d-flex justify-content-between">
                  {/* <Button variant="warning" onClick={() => handleEditPet(pet._id)}>Edit</Button> */}
                  <Button variant="danger" onClick={() => handleDeletePet(pet._id)}>Delete</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Food Section */}
      <h4 className="text-success mt-5">Food</h4>
      <Row>
        {foods.map((food, i) => (
          <Col key={i} xs={12} sm={6} md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Img variant="top" src={`http://localhost:5000/${food.image}`} className="fixed-img mx-auto mt-2" />
              <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> ₹{food.price}<br />
                  <strong>Brand:</strong> {food.brand}<br />
                  <strong>Weight:</strong> {food.weight}<br />
                  <strong>Category:</strong> {food.category} / {food.subCategory}<br />
                  {food.description}
                </Card.Text>
                <div className="d-flex justify-content-between">
                  {/* <Button variant="warning" onClick={() => handleEditFood(food._id)}>Edit</Button> */}
                  <Button variant="danger" onClick={() => handleDeleteFood(food._id)}>Delete</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

       <h4 className="text-success mt-5">Product</h4>
      <Row>
        {things.map((thing, i) => (
          <Col key={i} xs={12} sm={6} md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Img variant="top" src={`http://localhost:5000/${thing.image}`} className="fixed-img mx-auto mt-2" />
              <Card.Body>
                <Card.Title>{thing.name}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> ₹{thing.price}<br />
                  <strong>Brand:</strong> {thing.brand}<br />
                  <strong>Category:</strong> {thing.category} / {thing.subCategory}<br />
                  {thing.description}
                </Card.Text>
                <div className="d-flex justify-content-between">
                  {/* <Button variant="warning" onClick={() => handleEditThing(thing._id)}>Edit</Button> */}
                  <Button variant="danger" onClick={() => handleDeleteThing(thing._id)}>Delete</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Footer />
    </Container>
  );
};

export default AdminDashboard;
