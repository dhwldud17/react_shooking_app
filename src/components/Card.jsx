import React from "react";

const Card = ({ cardNumber, expiryDate, cardholderName }) => {
  return (
    <div className="relative w-60 h-36 bg-gray-800 rounded-md flex flex-col justify-center items-center text-white p-4">
      <div className="absolute top-2 left-2 w-8 h-4 bg-yellow-500 rounded-md"></div>
      <div className="text-xl font-bold">{cardNumber}</div>
      <div className="mt-1">{cardholderName || "Name"}</div>
      <div className="absolute bottom-2 left-2 text-sm">{expiryDate}</div>
      <button className="mt-2 bg-yellow-500 text-black rounded-full py-1 px-4">
        이 카드로 결제하기
      </button>
    </div>
  );
};

export default Card;
