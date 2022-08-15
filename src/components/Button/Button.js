import React from 'react';
import './Button.css';

export default function Button({ text, color }) {
  return (
    <button className='Button' style={{ background: color }}>
      {text}
    </button>
  );
}
