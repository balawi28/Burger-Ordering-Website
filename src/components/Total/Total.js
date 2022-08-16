import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../Button/Button';

import './Total.css';

export default function Total() {
  const orderTotal = useSelector((state) => state.burger.orderTotal);

  return (
    <div className='Total'>
      <div className='Total-Line'></div>
      <div className='Total-Container'>
        <p className='Total-Sum'>{'Order Total: ' + orderTotal + '₪'}</p>
        <Button text='Submit Order' color='#524EEE' />
      </div>
    </div>
  );
}
