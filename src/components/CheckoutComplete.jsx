import React from "react";

const CheckoutComplete = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">결제 완료!</h2>
      <p className="text-lg mb-8">결제가 성공적으로 완료되었습니다.</p>
      <button
        onClick={() => (window.location.href = "/")} // 홈으로 돌아가기
        className="bg-yellow-400 text-black py-2 px-4 rounded-lg"
      >
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default CheckoutComplete;
