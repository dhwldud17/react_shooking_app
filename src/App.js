import "./index.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail.jsx";
import Cart from "./components/Cart";
import Header from "./components/Header.jsx";

export default function App() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <Router>
      <div className="App container mx-auto p-4">
        <Header
          cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        />
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route
            path="/product/:id"
            element={<ProductDetail addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route
            path="*"
            element={
              <h1 className="text-center text-xl mt-8">404 Not Found</h1>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
