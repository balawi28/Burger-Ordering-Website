import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from 'lodash';
import BurgerCheese from '../icons/burger-cheese.svg';
import BurgerLeaf from '../icons/burger-leaf.svg';
import BurgerLettuce from '../icons/burger-lettuce.svg';
import BurgerMushroom from '../icons/burger-mushroom.svg';
import BurgerOnion from '../icons/burger-onion.svg';
import BurgerTomato from '../icons/burger-tomato.svg';
import URL from '../urls.json';
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;

const initialState = {
  loading: false,
  error: '',
  elements: [],
  orderTotal: 12,
  prices: [],
  ingredients: {
    cheese: { image: BurgerCheese, name: 'Cheese' },
    leaf: { image: BurgerLeaf, name: 'Leaf' },
    lettuce: { image: BurgerLettuce, name: 'Lettuce' },
    mushroom: { image: BurgerMushroom, name: 'Mushroom' },
    onion: { image: BurgerOnion, name: 'Onion' },
    tomato: { image: BurgerTomato, name: 'Tomato' },
  },
};

export const fetchPrices = createAsyncThunk('burger/fetchPrices', async () => {
  return axios
    .get(URL.prices)
    .then((response) => _.map(response.data, (price) => price));
});

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
      state.orderTotal -= _.find(
        state.elements,
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

      payload.forEach((element) => {
        let elementPrice = state.prices[element.toLowerCase()];
        state.orderTotal += +elementPrice;

        state.elements = [
          ...state.elements,
          {
            discreption: element + ': ' + elementPrice + '₪',
            image: state.ingredients[element.toLowerCase()].image,
            removable: true,
            name: element,
            price: elementPrice,
          },
        ];
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPrices.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPrices.fulfilled, (state, action) => {
      state.loading = false;
      state.prices = action.payload[0];
      state.error = '';
    });
    builder.addCase(fetchPrices.rejected, (state, action) => {
      state.loading = false;
      state.prices = [];
      state.error = action.error.message;
    });
  },
});
export const { addElement, removeElement, setElements } = burgerSlice.actions;
export default burgerSlice.reducer;
