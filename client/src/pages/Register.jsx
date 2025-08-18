import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/register.css';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '', role: 'Customer', secretCode: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Regex validation function
  const validateForm = () => {
    let newErrors = {};
    
    // Username: 3–15 letters/numbers only
    if (!/^[a-zA-Z0-9]{3,15}$/.test(form.username)) {
      newErrors.username = 'Username must be 3-15 alphanumeric characters';
    }
    
    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    // Password: Minimum 6 chars, at least 1 uppercase, 1 lowercase, 1 number, 1 special character
    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{6,}$/.test(form.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, number & special char (min 6 chars)';
    }
    
    // Secret Code (only if role is Admin) – Example: Must match "ADMIN123"
    if (form.role === 'Admin' && form.secretCode.trim() !== '123456') {
      newErrors.secretCode = 'Invalid admin secret code';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return; // Stop if validation fails
    
    try {
      console.log("Submitting form:", form);
      const res = await axios.post('http://localhost:5000/api/auth/register', form);
      alert(res.data.message);
      navigate('/login');
    } catch (err) {
      console.error("Registration error:", err.response?.data || err.message);
      alert(err.response?.data?.error || 'Register failed');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        
        <input 
          name="username" 
          placeholder="Username" 
          onChange={handleChange} 
          required 
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <input 
          name="email" 
          type="email" 
          placeholder="Email" 
          onChange={handleChange} 
          required 
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input 
          name="password" 
          type="password" 
          placeholder="Password" 
          onChange={handleChange} 
          required 
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <select name="role" onChange={handleChange} value={form.role}>
          <option>Customer</option>
          <option>Admin</option>
        </select>

        {form.role === 'Admin' && (
          <>
            <input 
              name="secretCode" 
              placeholder="Admin Secret Code" 
              onChange={handleChange} 
            />
            {errors.secretCode && <p className="error">{errors.secretCode}</p>}
          </>
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
