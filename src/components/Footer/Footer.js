import React from 'react';

import FooterElement from '../FooterElement/FooterElement';

import './Footer.css';

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer-Container'>
        <FooterElement
          title='Contact Us'
          data={['burger@mail.com', '00972595662147']}
        />
        <FooterElement
          title='Our Location'
          data={['Al-Masyon, Ramallah', 'PO Box 23253 ']}
        />
        <FooterElement title='About Us' data={['Burger Restaurant']} />
      </div>
    </div>
  );
}
