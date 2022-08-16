import React from 'react';
import './Button.css';

export default function Button({ text, color, onClick }) {
  return (
    <button className='Button' style={{ background: color }} onClick={onClick}>
      {text}
    </button>
  );
}
