import React from 'react';
import './FooterElement.css';

export default function FooterElement({ title, data, Icon }) {
  return (
    <div className='FooterElement'>
      <div className='FooterElement-Container'>
        <h3 className='FooterElement-Title'>{title.toUpperCase()}</h3>
        {data.map((string) => (
          <pre key={string}>{string}</pre>
        ))}
      </div>
    </div>
  );
}
