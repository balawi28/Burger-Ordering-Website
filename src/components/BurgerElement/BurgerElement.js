import React from 'react';
import { useDispatch } from 'react-redux';
import { removeElement } from '../../features/burger';
import { removeDiscount } from '../../features/discount';
import { ReactComponent as RemoveIcon } from '../../icons/remove.svg';
import './BurgerElement.css';
export default function BurgerElement({ image, discreption, removable, name }) {
  const dispatch = useDispatch();

  return (
    <div className='BurgerElement'>
      <RemoveIcon
        className='BurgerElement-Remove'
        onClick={
          removable
            ? () => {
                dispatch(removeElement(name));
                dispatch(removeDiscount());
              }
            : () => {
                return;
              }
        }
        fill={removable ? '#F44336' : '#666'}
        cursor={removable ? 'pointer' : 'default'}
      />
      <div className='BurgerElement-Text'>{discreption}</div>
      <img className='BurgerElement-Image' src={image} alt={discreption} />
    </div>
  );
}
