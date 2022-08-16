import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  elements: [],
  orderTotal: 12,
};

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    addElement: (state, { payload }) => {
      state.elements = [
        ...state.elements,
        {
          text: payload.text,
          image: payload.image,
          removable: payload.removable,
          name: payload.name,
          key: payload.key,
          price: payload.price,
        },
      ];

      state.orderTotal += +payload.price;
    },

    removeElement: (state, { payload }) => {
      state.orderTotal -= state.elements.find(
        (element) => element.name === payload
      ).price;
      state.elements = state.elements.filter(
        (element) => element.name !== payload
      );
    },
  },
});
export const { addElement, removeElement } = burgerSlice.actions;
export default burgerSlice.reducer;
