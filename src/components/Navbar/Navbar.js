import React from 'react';
import Logo from '../../icons/logo.svg';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='Navbar'>
      <img className='Navbar-Logo' src={Logo} alt='Logo' />
      <h2>Home</h2>
      <h2>Orders</h2>
    </div>
  );
}
