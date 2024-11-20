import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CardForm = ({ onAddCard }) => {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState(""); // 만료일 상태
  const [cardholderName, setCardholderName] = useState(""); // 카드 소유자 이름 상태
  const [cvc, setCvc] = useState(""); // 보안 코드(CVC) 상태
  const [password, setPassword] = useState(["", ""]); // 카드 비밀번호 상태 배열
  // 카드 번호 입력 처리 함수
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // 입력값에서 숫자가 아닌 문자를 제거
    value = value.slice(0, 16); // 카드 번호는 최대 16자리

    // 4자리마다 공백 추가
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1-");
    setCardNumber(formattedValue); // 상태에 업데이트
  };

  // 만료일 입력 처리 함수
  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // 숫자 이외의 문자를 제거
    if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2, 4); // MM/YY 형식으로 변환
    setExpiryDate(value); // 만료일 상태 업데이트
  };

  // 카드 비밀번호 입력 처리 함수
  const handlePasswordChange = (index, value) => {
    const newPassword = [...password]; // 현재 비밀번호 배열 복사
    newPassword[index] = value.replace(/\D/g, "").slice(0, 1); // 숫자 이외의 문자를 제거하고 1자리만 허용
    setPassword(newPassword); // 비밀번호 상태 업데이트
  };

  const handleSaveCard = () => {
    if (!cardholderName || !cardNumber || !expiryDate || !cvc || !password) {
      alert("모두 입력해주세요.");
      return;
    }

    // 새 카드 데이터 생성
    const newCard = { cardNumber, expiryDate, cardholderName, cvc, password };

    // 부모 컴포넌트로 카드 데이터 전달
    onAddCard(newCard);

    // 카드 목록 페이지로 이동
    navigate("/cards");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">카드 추가</h2>
      {/* 카드 상단 이미지 */}
      <div className="mb-6 relative w-60 h-36 bg-gray-800 rounded-md flex justify-center items-center mx-auto">
        <div className="absolute left-4 top-3.5% transform rounded-md -translate-y-1/2 h-7 w-11 bg-yellow-500"></div>
        <div className="absolute bottom-10 text-white text-xl font-bold">
          {cardNumber} {/* 카드 번호 또는 기본값 */}
        </div>
        <div className="absolute bottom-4 left-4 text-white text-sm">
          {cardholderName || "Name"} {/* 카드 소유자 이름 표시 */}
        </div>
        <div className="absolute bottom-4 right-4 text-white">
          {/* 만료일 표시 (추후 추가 가능) */}
          {expiryDate || "MM/YY"}
        </div>
      </div>
      {/* 카드 번호 입력 필드 */}
      <label className="block mb-2 text-sm font-medium text-gray-700">
        카드 번호
      </label>
      <input
        type="text"
        value={cardNumber}
        onChange={handleCardNumberChange}
        //placeholder="1111 2222 •••• ••••"
        maxLength={19}
        className="block  w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-gray-100 "
      />

      {/* 만료일 입력 필드 */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">
        만료일
      </label>
      <input
        type="text"
        value={expiryDate} // 만료일 상태
        onChange={handleExpiryDateChange} // 만료일 변경 시 함수 호출
        placeholder="MM/YY" // 입력 필드의 플레이스홀더
        maxLength={5} // 최대 입력 길이
        className="block w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-gray-100"
      />

      {/* 카드 소유자 이름 입력 필드 */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">
        카드 소유자 이름
      </label>
      <input
        type="text"
        value={cardholderName} // 카드 소유자 이름 상태
        onChange={(e) => setCardholderName(e.target.value)} // 이름 변경 시 상태 업데이트
        placeholder="카드에 표시된 이름과 동일하게 입력하세요." // 입력 필드의 플레이스홀더
        maxLength={30} // 최대 입력 길이
        className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-gray-100"
      />

      {/* 보안 코드 (CVC) 입력 필드 */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">
        보안 코드 (CVC)
      </label>
      <div className="flex">
        <input
          type="password" // 입력 타입을 password로 변경하여 점으로 표시
          value={cvc} // 보안 코드 상태
          onChange={(e) => setCvc(e.target.value.slice(0, 3))} // CVC 변경 시 상태 업데이트
          //placeholder="•••" // 입력 필드의 플레이스홀더
          maxLength={3} // 최대 입력 길이
          className="block w-1/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-gray-100 text-2xl"
        />
        <button className="ml-2 px-2 py-1 bg-gray-200 rounded-full">?</button>{" "}
        {/* CVC 정보 버튼 */}
      </div>

      {/* 카드 비밀번호 입력 필드 */}
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">
        카드 비밀번호
      </label>
      <div className="flex space-x-2">
        {password.map(
          (
            value,
            index // 비밀번호 상태 배열을 순회
          ) => (
            <input
              key={index} // 고유 키
              type="password" // 비밀번호 입력 필드
              value={value} // 현재 비밀번호 상태
              onChange={(e) => handlePasswordChange(index, e.target.value)} // 비밀번호 변경 시 함수 호출
              maxLength={1} // 최대 입력 길이
              className="block w-1/6 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-center bg-gray-100 text-2xl"
            />
          )
        )}
        {/* 아무 기능 없는 창 추가 */}
        <div className=" w-1/6 p-2   rounded-md   text-center text-2xl">
          {/* 점으로 표시하기 위해 문자를 적어둘 수 있음 */}•
        </div>
        <div className="block w-1/6 p-2 rounded-md  text-center text-2xl">
          {/* 점으로 표시하기 위해 문자를 적어둘 수 있음 */}•
        </div>
      </div>

      {/* 작성 완료 버튼 */}

      <button
        onClick={handleSaveCard}
        className="block w-full mt-6 p-2 bg-black text-white rounded-md text-center"
      >
        작성 완료
      </button>
    </div>
  );
};

export default CardForm;
