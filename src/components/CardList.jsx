import React, { useState } from "react";
import Card_Input from "./Card_Input"; // Your existing Input component

import Card from "./Card"; // New Card componentimport
import { useNavigate } from "react-router-dom";
const CardList = () => {
  const [cards, setCards] = useState([]); // State for storing card details
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">보유카드</h2>
      {cards.length > 0 ? (
        cards.map((card, index) => (
          <Card
            key={index}
            cardNumber={card.cardNumber.replace(/\d(?=\d{4})/g, "•")} // Masking card number except for last 4 digits
            expiryDate={card.expiryDate}
            cardholderName={card.cardholderName}
          />
        ))
      ) : (
        <p className="mb-4">새로운 카드를 등록해주세요.</p>
      )}

      <div
        className="flex items-center justify-center w-full h-36 border border-gray-300 rounded-lg cursor-pointer  bg-gray-100"
        onClick={() => navigate("/Card_Input")}
      >
        <span className="text-4xl">+</span>
      </div>
    </div>
  );
};

export default CardList;
