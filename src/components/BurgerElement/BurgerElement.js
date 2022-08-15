import React from 'react';
import { ReactComponent as RemoveIcon } from '../../icons/remove.svg';
import './BurgerElement.css';

export default function BurgerElement({
  image,
  text,
  removable,
  removeElement,
}) {
  return (
    <div className='BurgerElement'>
      <RemoveIcon
        className='BurgerElement-Remove'
        onClick={removable ? removeElement : ''}
        fill={removable ? '#F44336' : '#666'}
        cursor={removable ? 'pointer' : 'default'}
      />
      <div className='BurgerElement-Text'>{text}</div>
      <img className='BurgerElement-Image' src={image} alt={text} />
    </div>
  );
}
