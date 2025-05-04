import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    window.location.href = 'https://www.nishantsankar.online'; // ✅ External redirect
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // ✅ Clear token if used
    navigate('/login'); // ✅ Redirect to login page
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome!</h2>
      <p>You are successfully logged in.</p>
      <button onClick={handleRedirect} style={{ margin: '10px' }}>
        Go to Website
      </button>
      <button onClick={handleLogout} style={{ margin: '10px' }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
