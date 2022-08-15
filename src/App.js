import { React } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Burger from './components/Burger/Burger';
import ElementAdder from './components/ElementsAdder/ElementAdder';
import Navbar from './components/Navbar/Navbar';
import Orders from './components/Orders/Orders';
import { fetchPrices } from './features/price';

export default function App() {
  const dispatch = useDispatch();
  dispatch(fetchPrices());

  return (
    <div className='App'>
      <div className='App-Container'>
        <div className='App-Navbar'>
          <Navbar />
        </div>
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
    </div>
  );
}
