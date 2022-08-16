import React from 'react';
import BurgerBreadBottom from '../../icons/burger-bread-bottom.svg';
import BurgerBreadTop from '../../icons/burger-bread-top.svg';
import BurgerMeatBeef from '../../icons/burger-meat-beef.svg';
import './BurgerPreview.css';

export default function BurgerPreview({ elements }) {
  return (
    <div className='BurgerPreview'>
      <img src={BurgerBreadBottom} alt='Bread: Base Price' />
      <img src={BurgerMeatBeef} alt='Beef: Base Price' />
      {elements &&
        elements.map(({ image, text }) => (
          <img className='id' src={image} alt={text} />
        ))}
      <img src={BurgerBreadTop} alt='Bread: Base Price' />
    </div>
  );
}
