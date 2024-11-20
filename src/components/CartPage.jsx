import React from "react";

const CartPage = ({ cartItems }) => {
  // 총 가격 계산 함수
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace("원", "").replace(",", "")); // 가격에서 "원"과 쉼표 제거
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div>
      <h2>장바구니</h2>
      {cartItems.length === 0 ? (
        <p>장바구니에 상품이 없습니다.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.img} alt={item.brand} width={50} />
                <span>{item.brand}</span> - <span>{item.price}</span> x{" "}
                {item.quantity}
              </li>
            ))}
          </ul>
          <h3>총액: {getTotalPrice()}원</h3>
          <button>구매하기</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
