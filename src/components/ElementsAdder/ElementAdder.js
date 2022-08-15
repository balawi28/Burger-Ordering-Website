import React from 'react';
import BurgerCheese from '../../icons/burger-cheese.svg';
import BurgerLeaf from '../../icons/burger-leaf.svg';
import BurgerLettuce from '../../icons/burger-lettuce.svg';
import BurgerMushroom from '../../icons/burger-mushroom.svg';
import BurgerOnion from '../../icons/burger-onion.svg';
import BurgerTomato from '../../icons/burger-tomato.svg';

import Element from '../Element/Element';
import './ElementAdder.css';
export default function ElementAdder() {
  return (
    <div className='ElementAdder'>
      <Element image={BurgerCheese} text='Cheese' price={6} />
      <Element image={BurgerLeaf} text='Leaf' price={1} />
      <Element image={BurgerLettuce} text='Lettuce' price={22} />
      <Element image={BurgerMushroom} text='Mushroom' price={22} />
      <Element image={BurgerOnion} text='Onion' price={22} />
      <Element image={BurgerTomato} text='Tomato' price={22} />
    </div>
  );
}
