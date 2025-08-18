// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from '../src/compontents/Navigation'; 
import Food from './pages/Food';
import Pet from './pages/Pet';
import About from './pages/About';
import Things from './pages/Things';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from '../src/compontents/ProtectedRoute';
import Form from './compontents/Payment';
import Cart from './pages/Cart';
import AdminDashboard from './admin/AdminDashboard';
import AddPetForm from './admin/AddPetForm';
import AddFoodForm from './admin/AddFoodForm';
import AddThingForm from './admin/AddThingsForm';
import Profile from './userProfile/Profile';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Form />} />
         <Route path="/admin-dashboard" element={<AdminDashboard />} />
         <Route path="/add-pet" element={<AddPetForm />} />
         <Route path="/add-food" element={<AddFoodForm />} />
         <Route path="/add-things" element={<AddThingForm />} />
         <Route path="/profile" element={<Profile/>} />

        {/* Protected Routes */}
        <Route path="/pet" element={
          <ProtectedRoute>
            <Pet />
          </ProtectedRoute>
        } />
        <Route path="/food" element={
          <ProtectedRoute>
            <Food />
          </ProtectedRoute>
        } />
        <Route path="/things" element={
          <ProtectedRoute>
            <Things />
          </ProtectedRoute>
        } />
        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>} 
        />
      </Routes>
    </Router>
  );
}

export default App;
