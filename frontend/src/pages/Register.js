import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';  // Register-specific styles

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', form);
      alert('Registered Successfully!');
      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.msg || 'Error occurred');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Page</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
