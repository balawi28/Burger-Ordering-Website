import _ from 'lodash';
import { useSelector } from 'react-redux';
import BurgerBreadBottom from '../../icons/burger-bread-bottom.svg';
import BurgerBreadTop from '../../icons/burger-bread-top.svg';
import BurgerMeatBeef from '../../icons/burger-meat-beef.svg';
import BurgerElement from '../BurgerElement/BurgerElement';
import OrderTotal from '../OrderTotal/OrderTotal';
import './Burger.css';

export default function Burger() {
  const burger = useSelector((state) => state.burger);
  let key = 0;

  return (
    <div className='Burger'>
      <div className='Burger-OrderTotal'>
        <OrderTotal />
      </div>

      <BurgerElement
        image={BurgerBreadBottom}
        discreption='Bread: Base Price'
        removable={false}
      />

      {_.map(burger.elements, (element) => (
        <BurgerElement
          discreption={element.discreption}
          image={element.image}
          removable={element.removable}
          name={element.name}
          key={key++}
        />
      ))}

      <BurgerElement
        image={BurgerMeatBeef}
        discreption='Beef: Base Price'
        removable={false}
      />

      <BurgerElement
        image={BurgerBreadTop}
        discreption='Bread: Base Price'
        removable={false}
      />
    </div>
  );
}
