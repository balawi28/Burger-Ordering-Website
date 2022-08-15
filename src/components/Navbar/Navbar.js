import React from 'react';
import Logo from '../../icons/logo.svg';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='Navbar'>
      <img className='Navbar-Logo' src={Logo} alt='Logo' />
    </div>
  );
}
