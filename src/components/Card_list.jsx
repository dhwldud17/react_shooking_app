import React, { useState } from "react";
import Card_Input from "./Card_Input"; // Your existing Input component
import Modal from "./Modal"; // Modal component
import Card from "./Card"; // New Card component

const CardList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [cards, setCards] = useState([]); // State for storing card details

  const handleOpenModal = () => {
    setIsModalOpen(true); // Open modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]); // Add new card to state
    handleCloseModal(); // Close modal after adding
  };

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
        onClick={handleOpenModal}
      >
        <span className="text-4xl">+</span>
      </div>

      {/* Modal for Card Input */}
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <Card_Input onAddCard={handleAddCard} />{" "}
          {/* Pass down function to add card */}
        </Modal>
      )}
    </div>
  );
};

export default CardList;
