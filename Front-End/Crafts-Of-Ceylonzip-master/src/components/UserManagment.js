// UserManagement.js
import React from 'react';
import '../styles/usermanagement.css'
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className='header-container'>
      <div className='header'>
        <Link to="/" style={{color:"black"}}><h1>Crafts of Ceylon.</h1></Link>
      </div>
    </div>
  );
}

export function WhiteLine1() {
  return (
    <div className='whiteLine'>
    </div>
  );
}

export function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <Link to="/conditions">Conditions of Use</Link>
        <Link to="/privacy">Privacy Note</Link>
        <Link to="/help">Help</Link>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </div>
  );
}


