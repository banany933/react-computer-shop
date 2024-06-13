import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {





  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Items/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}





export default App;


