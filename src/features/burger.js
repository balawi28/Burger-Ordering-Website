import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  elements: [],
};

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.elements = [...state.elements, action.payload];
    },
  },
});

export const { addElement } = burgerSlice.actions;
export default burgerSlice.reducer;
