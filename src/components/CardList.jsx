import React from "react";
import { useNavigate } from "react-router-dom";

const CardList = ({ cards }) => {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅

  const handlePayment = (card) => {
    console.log(`결제 카드: ${card.cardName}`); // 선택한 카드 정보 로그
    navigate("/checkout-complete"); // 결제 완료 페이지로 이동
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">등록된 카드</h2>
      <div className="space-y-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="mb-6 relative w-60 rounded-md flex flex-col justify-center items-center mx-auto"
          >
            {/* 카드 이미지 */}
            <div className="relative w-full h-36 bg-gray-800 rounded-md flex justify-center items-center mb-4">
              {" "}
              {/* 간격 추가 */}
              <div className="absolute left-4 top-3.5% transform rounded-md -translate-y-1/2 h-7 w-11 bg-yellow-500"></div>
              <div className="absolute bottom-10 text-white text-xl font-bold">
                {card.cardNumber} {/* 카드 번호 */}
              </div>
              <div className="absolute bottom-4 left-4 text-white text-sm">
                {card.cardholderName || "Name"} {/* 카드 소유자 이름 */}
              </div>
              <div className="absolute bottom-4 right-4 text-white">
                {card.expiryDate || "MM/YY"} {/* 만료일 */}
              </div>
            </div>

            {/* 결제 버튼 */}
            <button
              onClick={() => handlePayment(card)} // 결제 버튼 클릭 시 호출
              className="w-full bg-yellow-500 text-white py-1 rounded-lg"
            >
              이 카드로 결제하기
            </button>
          </div>
        ))}
        <button
          onClick={() => navigate("/cards/new")} // 새 카드 등록 페이지로 이동
          className=" w-full bg-gray-100 border border-gray-300 text-center py-10 px-7 rounded-lg"
        >
          + 새 카드 등록
        </button>
      </div>
    </div>
  );
};

export default CardList;
