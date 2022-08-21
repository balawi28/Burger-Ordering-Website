import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enabled: false,
  percentage: 0,
};

export const discountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {
    addDiscount: (state, action) => {
      state.enabled = true;
      state.percentage = action.payload;
    },

    removeDiscount: (state) => {
      state.enabled = false;
    },
  },
});
export const { addDiscount, removeDiscount } = discountSlice.actions;
export default discountSlice.reducer;
