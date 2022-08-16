import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import burgerReducer from './features/burger';
import orderReducer from './features/order';
import priceReducer from './features/price';

const store = configureStore({
  reducer: {
    price: priceReducer,
    burger: burgerReducer,
    order: orderReducer,
  },
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
