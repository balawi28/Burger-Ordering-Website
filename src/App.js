import { React, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Burger from './components/Burger/Burger';
import Total from './components/Total/Total';
import { fetchPrices } from './features/price';

export default function App() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchPrices());
  }, []);

  return (
    <div className='App'>
      <div className='App-Container'>
        <div className='App-Title'>
          <h1>Burger Ordering Application</h1>
        </div>
        <div className='App-Burger'>
          <Burger />
        </div>
        <div className='App-Total'>
          <Total />
        </div>
      </div>
    </div>
  );
}
