// import { useDispatch, useSelector } from 'react-redux';
import BurgerBreadBottom from '../../icons/burger-bread-bottom.svg';
import BurgerBreadTop from '../../icons/burger-bread-top.svg';
import BurgerMeatBeef from '../../icons/burger-meat-beef.svg';
import BurgerElement from '../BurgerElement/BurgerElement';
import Total from '../Total/Total';
import './Burger.css';

export default function Burger() {
  // const price = useSelector((state) => state.price);
  // const burger = useSelector((state) => state.burger);

  // const dispatch = useDispatch();
  // dispatch(addElement({ name: 'mushroom' }));

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

      {/* <p>{burger.length}</p> */}
      {/* {burger.length &&
        burger.map((element) => (
          <BurgerElement
            image={BurgerBreadTop}
            text={element.name}
            removable={true}
          />
        ))} */}

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

/*

        
      <BurgerElement
        image={BurgerLeaf}
        text='Leaf: 1₪'
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
