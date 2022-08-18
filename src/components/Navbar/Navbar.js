import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../icons/logo.svg';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='Navbar'>
      <NavLink className='Navbar-Logo' to='/'>
        <img className='Navbar-Logo' src={Logo} alt='Logo' />
      </NavLink>
      <div className='Navbar-LinksWrapper'>
        <NavLink
          to='/'
          className='NavLink'
          style={({ isActive }) =>
            isActive ? { color: 'white' } : { color: '#8893b5' }
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/orders'
          className='NavLink'
          style={({ isActive }) =>
            isActive ? { color: 'white' } : { color: '#8893b5' }
          }
        >
          Orders
        </NavLink>
      </div>
    </div>
  );
}
