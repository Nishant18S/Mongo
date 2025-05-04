import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; // ✅ Import Dashboard

function App() {
  return (
    <Router>
      <div className="App">
        <h2>User Authentication</h2>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ Dashboard route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
