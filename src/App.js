import React from 'react';
import './App.css';
import Header from './common/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pages from './pages/Pages';
import Data from './components/Data';
import Cart from './common/cart/Cart';

function App() {
  const { productItems } = Data;
  
  
  return (
    <>
        <Router>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Pages productItems={productItems}/>} />
            <Route exact path="/cart" element={<Cart/>} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
