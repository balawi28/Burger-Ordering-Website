import React from 'react';
import './BurgerPreview.css';

export default function BurgerPreview({ elements }) {
  return (
    <div className='BurgerPreview'>
      {elements &&
        elements.map(({ image, text }) => (
          <img className='id' src={image} alt={text} />
        ))}
    </div>
  );
}
