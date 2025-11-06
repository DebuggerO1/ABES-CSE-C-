import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Register from './Register.jsx';
import Login from './Login.jsx';
import Book from './Book.jsx';

function Navbar() {
  return (
    <div>
        <nav style={navbar}>
        <Link to="/">Book</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
    </nav>

      <Routes>
        <Route path="/" element={<Book/>} />
        <Route path="/login" element={<Login />} />      
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default Navbar;
