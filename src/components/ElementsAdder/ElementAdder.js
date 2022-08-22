import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import BurgerCheese from '../../icons/burger-cheese.svg';
import BurgerLeaf from '../../icons/burger-leaf.svg';
import BurgerLettuce from '../../icons/burger-lettuce.svg';
import BurgerMushroom from '../../icons/burger-mushroom.svg';
import BurgerOnion from '../../icons/burger-onion.svg';
import BurgerTomato from '../../icons/burger-tomato.svg';
import Element from '../Element/Element';
import './ElementAdder.css';

export default function ElementAdder() {
  const price = useSelector((state) => state.burger.prices);

  const { cheese, leaf, lettuce, mushroom, onion, tomato } = price;

  let ingredients = [
    { image: BurgerCheese, name: 'Cheese', price: cheese },
    { image: BurgerLeaf, name: 'Leaf', price: leaf },
    { image: BurgerLettuce, name: 'Lettuce', price: lettuce },
    { image: BurgerMushroom, name: 'Mushroom', price: mushroom },
    { image: BurgerOnion, name: 'Onion', price: onion },
    { image: BurgerTomato, name: 'Tomato', price: tomato },
  ];

  return (
    <div className='ElementAdder'>
      {_.map(ingredients, (ingredient) => (
        <Element
          image={ingredient.image}
          name={ingredient.name}
          key={ingredient.name}
          price={ingredient.price}
        />
      ))}
    </div>
  );
}
