import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import BurgerCheese from '../icons/burger-cheese.svg';
import BurgerLeaf from '../icons/burger-leaf.svg';
import BurgerLettuce from '../icons/burger-lettuce.svg';
import BurgerMushroom from '../icons/burger-mushroom.svg';
import BurgerOnion from '../icons/burger-onion.svg';
import BurgerTomato from '../icons/burger-tomato.svg';

const initialState = {
  elements: [],
  orderTotal: 12,
  ingredients: {
    cheese: { image: BurgerCheese, name: 'Cheese' },
    leaf: { image: BurgerLeaf, name: 'Leaf' },
    lettuce: { image: BurgerLettuce, name: 'Lettuce' },
    mushroom: { image: BurgerMushroom, name: 'Mushroom' },
    onion: { image: BurgerOnion, name: 'Onion' },
    tomato: { image: BurgerTomato, name: 'Tomato' },
  },
};

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    addElement: (state, { payload }) => {
      state.elements = [
        ...state.elements,
        {
          discreption: payload.discreption,
          image: payload.image,
          removable: payload.removable,
          name: payload.name,
          price: payload.price,
        },
      ];

      state.orderTotal += +payload.price;
    },

    removeElement: (state, { payload }) => {
      state.orderTotal -= state.elements.find(
        (element) => element.name === payload
      ).price;

      state.elements = _.without(
        state.elements,
        _.find(state.elements, { name: payload })
      );
    },

    setElements: (state, { payload }) => {
      state.orderTotal = initialState.orderTotal;
      state.elements = [];

      state.elements.forEach((element) => {
        state.orderTotal += element.price;
        state.ingredients.forEach((ingredient) => {
          if (element.name === ingredient.name) {
            element.image = ingredient.image;
            element.discreption = element.name + ': ' + element.price + '₪';
          }
        });
      });
    },
  },
});
export const { addElement, removeElement, setElements } = burgerSlice.actions;
export default burgerSlice.reducer;
