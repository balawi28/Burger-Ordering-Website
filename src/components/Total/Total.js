import React from 'react';
import Button from '../Button/Button';
import './Total.css';

export default function Total() {
  return (
    <div className='Total'>
      <div className='Total-Line'></div>
      <div className='Total-Container'>
        <p className='Total-Sum'>{'Order Total: ' + 22 + '₪'}</p>
        <Button text='Submit Order' color='#524EEE' />
      </div>
    </div>
  );
}
