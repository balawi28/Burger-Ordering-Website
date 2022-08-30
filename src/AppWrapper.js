import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import burgerReducer from './features/burger';
import discountReducer from './features/discount';
import orderReducer from './features/order';

const store = configureStore({
  reducer: {
    burger: burgerReducer,
    order: orderReducer,
    discount: discountReducer,
  },
  middleware: [thunk],
});

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
