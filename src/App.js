import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import ProductList from './components/ProductList';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [cartCount, setCartCount]= useState(0);
  return (
    <div className=" pt-10 m-auto" style={{ width: "429px" }}>
      <Header cartCount={cartCount}></Header>
      <ProductList onCartCountChange={setCartCount}/>
    </div>
  );
}

export default App;
