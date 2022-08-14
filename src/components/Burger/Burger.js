import { useSelector } from 'react-redux';
import BurgerBreadBottom from '../../icons/burger-bread-bottom.svg';
import BurgerBreadTop from '../../icons/burger-bread-top.svg';
import BurgerElement from '../BurgerElement/BurgerElement';
import './Burger.css';

export default function Burger() {
  const price = useSelector((state) => state.price);
  const burger = useSelector((state) => state.burger);

  return (
    <div className='Burger'>
      <BurgerElement
        image={BurgerBreadBottom}
        text='Bread: Base Price'
        removable={true}
      ></BurgerElement>

      {/* {burger.map((element) => (
        <BurgerElement
          image={BurgerBreadTop}
          text='Bread: Base Price'
          removable={true}
        ></BurgerElement>
      ))} */}

      <BurgerElement
        image={BurgerBreadTop}
        text='Bread: Base Price'
        removable={true}
      ></BurgerElement>
    </div>
  );
}

/*

        
      <BurgerElement
        image={BurgerLeaf}
        text='Leaf: 1₪'
        removable={true}
      ></BurgerElement>

      <BurgerElement
        image={BurgerMeatBeef}
        text='Beef: Base Price'
        removable={true}
      ></BurgerElement>

      <BurgerElement
        image={BurgerCheese}
        text='Cheese: 5₪'
        removable={true}
      ></BurgerElement>

      <BurgerElement
        image={BurgerTomato}
        text='Tomato: 2₪'
        removable={true}
      ></BurgerElement>

      <BurgerElement
        image={BurgerOnion}
        text='Onion: 1₪'
        removable={true}
      ></BurgerElement>

      <BurgerElement
        image={BurgerLettuce}
        text='Lettuce: 1₪'
        removable={true}
      ></BurgerElement>

      <BurgerElement
        image={BurgerMushroom}
        text='Mushroom: 2₪'
        removable={true}
      ></BurgerElement>
*/
