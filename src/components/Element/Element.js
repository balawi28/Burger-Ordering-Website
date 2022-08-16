import React from 'react';
import { useDispatch } from 'react-redux';
import { addElement } from '../../features/burger';
import './Element.css';
export default function Element({ image, name, price, enabled }) {
  const dispatch = useDispatch();

  let priceText = price ? price + '₪' : 'N/A';

  function addHandler() {
    dispatch(
      addElement({
        text: name + ': ' + priceText,
        price: price,
        image: image,
        removable: true,
        name: name,
        key: name,
      })
    );
  }

  return (
    <div className='Element'>
      <img className='Element-Img' src={image} alt={name} />
      <p className='Element-Title'>{name}</p>
      <p className='Element-Price'>{priceText}</p>
      <div
        className='Element-Add'
        onClick={addHandler}
        style={{ backgroundColor: enabled ? '#22850e' : '#444' }}
      >
        +
      </div>
      <div
        className='Element-Green'
        style={{ backgroundColor: enabled ? '#499d2f' : '#777' }}
      ></div>
    </div>
  );
}
