import { React } from 'react';

import Burger from '../Burger/Burger';
import ElementAdder from '../ElementsAdder/ElementAdder';
import './Home.css';

export default function App() {
  return (
    <div className='Home'>
      <div className='Home-Container'>
        <div className='Home-Burger'>
          <Burger />
        </div>

        <div className='Home-ElementAdder'>
          <ElementAdder />
        </div>
      </div>
    </div>
  );
}
