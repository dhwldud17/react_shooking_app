import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = 3000;
  const totalAmount = total + shippingFee;
  const navigate = useNavigate(); // Initialize the navigate function
  const handleCheckout = () => {
    // 카드 목록 페이지로 이동
    navigate("/cards");
  };
  const handleIncrease = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Format numbers with commas
  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  return (
    <div className="p-4 relative">
      <h2 className="text-2xl mb-4 font-bold">장바구니</h2>
      {cart.length === 0 ? (
        <p className="text-center">장바구니가 비었습니다.</p>
      ) : (
        <>
          <div className="text-sm text-gray-600">
            <span>현재 {cart.length}개의 상품이 담겨있습니다.</span>
          </div>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex p-4 border-b items-center space-x-10"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div className="flex flex-col pl-4 space-y-2">
                <span className="font-semibold text-2xl">{item.name}</span>
                <span className="font-bold text-xl">
                  {formatPrice(item.price)}원
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="bg-gray-300 px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="bg-gray-300 px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-600 mt-2"
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      <div className="flex justify-between mt-4 text-lg font-bold">
        <span>상품 금액</span>
        <span>{formatPrice(total)}원</span>
      </div>
      <div className="flex justify-between text-lg font-bold mt-2">
        <span>배송비</span>
        <span>{formatPrice(shippingFee)}원</span>
      </div>
      <div className="flex justify-between mt-4 text-xl font-bold">
        <span>총 금액</span>
        <span>{formatPrice(totalAmount)}원</span>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleCheckout} // Navigate to CardList when clicked
          className="w-11/12 sm:w-10/12 lg:w-8/12 bg-black text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800"
        >
          결제하기
        </button>
      </div>
    </div>
  );
}

export default Cart;
