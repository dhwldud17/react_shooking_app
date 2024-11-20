import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Header from "./components/Header.jsx";
import CardForm from "./components/CardForm.jsx";
import CardList from "./components/CardList.jsx";
import CheckoutComplete from "./components/CheckoutComplete.jsx";

export default function App() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [cards, setCards] = useState(() => {
    return JSON.parse(localStorage.getItem("cards")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

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

  const addCard = (card) => {
    setCards((prevCards) => [...prevCards, card]);
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
          {/* 카드 관리 페이지 추가 */}
          <Route
            path="/cards"
            element={<CardList cards={cards} onAddNew={() => {}} />}
          />
          <Route path="/cards/new" element={<CardForm onAddCard={addCard} />} />
          <Route path="/checkout-complete" element={<CheckoutComplete />} />
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
