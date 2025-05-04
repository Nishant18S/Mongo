import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();  // Using React Router's useNavigate hook
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);

      if (res.status === 200) {
        // Assuming the response contains a token:
        const token = res.data.token;
        
        // Save token to localStorage or sessionStorage (localStorage for persistence)
        localStorage.setItem('authToken', token);

        // Redirect after login (use React Router's navigate for SPA)
        navigate('/dashboard');  // Or your desired route (no page reload)
      }
    } catch (err) {
      // Handling errors more gracefully
      const errorMsg = err.response?.data?.message || 'Login failed';
      setError(errorMsg);
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
