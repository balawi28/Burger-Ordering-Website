import _ from 'lodash';
import { React } from 'react';
import ImageOffer1 from '../../images/offer1.png';
import ImageOffer2 from '../../images/offer2.png';
import ImageOffer3 from '../../images/offer3.png';
import Burger from '../Burger/Burger';
import ElementAdder from '../ElementsAdder/ElementAdder';
import Offer from '../Offer/Offer';
import './Home.css';

export default function App() {
  let key = 0;

  return (
    <div className='Home'>
      <div className='Home-Container'>
        <div className='Home-Burger'>
          <Burger />
        </div>
        <div className='Home-ElementAdder'>
          <ElementAdder />
        </div>

        {_.map(getOffers(), (offer) => (
          <Offer {...offer} key={key++} />
        ))}
      </div>
    </div>
  );
}

function getOffers() {
  return {
    1: {
      image: ImageOffer1,
      name: 'Double Mushroom Burger',
      percentage: 25,
      elements: ['Mushroom', 'Cheese', 'Lettuce', 'Tomato'],
    },

    2: {
      image: ImageOffer2,
      name: 'Lettuce Burger',
      percentage: 30,
      elements: ['Mushroom', 'Cheese', 'Lettuce', 'Tomato'],
    },

    3: {
      image: ImageOffer3,
      name: 'Triple Beef Burger',
      percentage: 35,
      elements: ['Mushroom', 'Cheese', 'Lettuce', 'Tomato'],
    },
  };
}
