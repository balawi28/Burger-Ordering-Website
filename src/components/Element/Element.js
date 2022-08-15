import React from 'react';
import './Element.css';
export default function Element({ image, text, price }) {
  return (
    <div className='Element'>
      <img className='Element-Img' src={image} alt={text} />
      <p className='Element-Title'>{text}</p>
      <p className='Element-Price'>{price + '₪'}</p>
      <div className='Element-Add'>+</div>
      <div className='Element-Green'></div>
    </div>
  );
}
