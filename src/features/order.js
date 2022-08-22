import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

let id = 1;
const initialState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, { payload }) => {
      state.orders = [
        ...state.orders,
        {
          id: id++,
          elements: payload.elements,
          status: true,
          price: payload.price,
          discount: payload.discount,
        },
      ];
    },

    deleteOrder: (state, { payload }) => {
      state.orders = _.filter(state.orders, (order) => order.id !== payload);
    },

    cancelOrder: (state, { payload }) => {
      state.orders = _.map(state.orders, (order) => {
        return order.id === payload ? { ...order, status: false } : order;
      });
    },
  },
});
export const { addOrder, cancelOrder, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;
