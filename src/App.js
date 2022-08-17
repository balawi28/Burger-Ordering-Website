import { React, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import Burger from './components/Burger/Burger';
import ElementAdder from './components/ElementsAdder/ElementAdder';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Orders from './components/Orders/Orders';
import { fetchPrices } from './features/price';

export default function App() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(fetchPrices());
  }, [dispatch]);

  return (
    <div className='App'>
      <Navbar />
      <div className='App-Container'>
        <div className='App-Burger'>
          <Burger />
        </div>

        <div className='App-ElementAdder'>
          <ElementAdder />
        </div>
        <div className='App-Orders'>
          <Orders />
        </div>
      </div>
      <Footer />
    </div>
  );
}
