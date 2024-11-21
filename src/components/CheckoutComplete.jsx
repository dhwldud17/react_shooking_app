import React from "react";

const CheckoutComplete = ({ cart }) => {
  // 총 구매 상품 개수 계산
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // 총 결제 금액 계산
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingFee = 3000;
  const finalPrice = totalPrice + shippingFee;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">결제 완료!</h2>
      <p className="text-lg mb-2">
        총 <span className="font-bold">{totalItems}</span>개의 상품을
        구매하셨습니다.
      </p>
      <p className="text-lg mb-8">
        총 결제 금액:{" "}
        <span className="font-bold">{finalPrice.toLocaleString()}원</span>
      </p>
      <button
        onClick={() => (window.location.href = "/")} // 홈으로 돌아가기
        className="bg-yellow-400 text-black py-2 px-4 rounded-lg"
      >
        상품 목록 보기
      </button>
    </div>
  );
};

export default CheckoutComplete;
