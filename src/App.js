import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Orders from './components/Orders/Orders';
import { fetchPrices } from './features/burger';

export default function App() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(fetchPrices());
  }, [dispatch]);

  return (
    <Router>
      <div className='App'>
        <div className='App-Container'>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/orders' exact element={<Orders />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
