import { createSlice } from '@reduxjs/toolkit';
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
      state.orders = state.orders.filter((order) => order.id !== payload);
    },

    cancelOrder: (state, { payload }) => {
      state.orders = state.orders.map((order) => {
        return order.id === payload ? { ...order, status: false } : order;
      });
    },
  },
});
export const { addOrder, cancelOrder, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;
