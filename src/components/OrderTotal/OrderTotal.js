import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../../features/order';
import Button from '../Button/Button';
import './OrderTotal.css';

export default function OrderTotal() {
  const dispatch = useDispatch();
  const burger = useSelector((state) => state.burger);
  const discount = useSelector((state) => state.discount);

  let finalPrice = discount.enabled ? sumAfterDiscount() : burger.orderTotal;

  function addHandler() {
    dispatch(
      addOrder({
        price: finalPrice,
        discount: discount.enabled,
        elements: burger.elements,
      })
    );
  }

  function sumAfterDiscount() {
    return (
      Math.round(
        burger.orderTotal * ((100 - discount.percentage) / 100.0) * 100
      ) / 100
    );
  }

  return (
    <div className='OrderTotal'>
      {discount.enabled && (
        <>
          <div className='OrderTotal-Line'></div>
          <p className='OrderTotal-Percentage'>
            {'Discount: ' + discount.percentage + '%'}
          </p>
          <p className='OrderTotal-BeforeDiscount'>
            {'Before Discount: ' + burger.orderTotal + '₪'}
          </p>
        </>
      )}
      <div className='OrderTotal-Line'></div>
      <div className='OrderTotal-Container'>
        <p className='OrderTotal-Sum'>{'Order Total: ' + finalPrice + '₪'}</p>
        <Button text='Submit Order' color='#524EEE' onClick={addHandler} />
      </div>
    </div>
  );
}
