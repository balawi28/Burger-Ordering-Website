import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../../features/order';
import Button from '../Button/Button';
import './Total.css';

export default function Total() {
  const dispatch = useDispatch();
  const burger = useSelector((state) => state.burger);

  function addHandler() {
    dispatch(addOrder({ price: burger.orderTotal, elements: burger.elements }));
  }

  return (
    <div className='Total'>
      <div className='Total-Line'></div>
      <div className='Total-Container'>
        <p className='Total-Sum'>{'Order Total: ' + burger.orderTotal + '₪'}</p>
        <Button text='Submit Order' color='#524EEE' onClick={addHandler} />
      </div>
    </div>
  );
}
