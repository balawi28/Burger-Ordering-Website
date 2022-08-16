import { useSelector } from 'react-redux';
import BurgerBreadBottom from '../../icons/burger-bread-bottom.svg';
import BurgerBreadTop from '../../icons/burger-bread-top.svg';
import BurgerMeatBeef from '../../icons/burger-meat-beef.svg';
import BurgerElement from '../BurgerElement/BurgerElement';
import Total from '../Total/Total';
import './Burger.css';

export default function Burger() {
  const burger = useSelector((state) => state.burger);

  return (
    <div className='Burger'>
      <div className='Burger-Total'>
        <Total />
      </div>

      <BurgerElement
        image={BurgerBreadBottom}
        text='Bread: Base Price'
        removable={false}
      />

      {burger.elements.map((element) => (
        <BurgerElement
          text={element.text}
          image={element.image}
          removable={element.removable}
          name={element.name}
          key={element.key}
        />
      ))}

      <BurgerElement
        image={BurgerMeatBeef}
        text='Beef: Base Price'
        removable={false}
      />

      <BurgerElement
        image={BurgerBreadTop}
        text='Bread: Base Price'
        removable={false}
      />
    </div>
  );
}
