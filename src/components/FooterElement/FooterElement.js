import React from 'react';
import { ReactComponent as Icon } from '../../icons/call.svg';
import './FooterElement.css';

export default function FooterElement({ title }) {
  return (
    <div className='FooterElement'>
      <Icon className='FooterElement-Icon' />
      <h3>{title}</h3>
    </div>
  );
}
