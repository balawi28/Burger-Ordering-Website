import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import URL from '../urls.json';
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;

const initialState = {
  loading: false,
  prices: [],
  error: '',
};

export const fetchPrices = createAsyncThunk('price/fetchPrices', async () => {
  return (
    axios
      .get(URL.prices)
      // .then((response) => console.log(response.data[0]))
      .then((response) => response.data.map((price) => price))
  );
});

const priceSlice = createSlice({
  name: 'price',
  initialState,
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

//module.exports.fetchPrices = fetchPrices;
export default priceSlice.reducer;
