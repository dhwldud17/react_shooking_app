import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductList = ({ addToCart }) => {
  const navigate = useNavigate(); // To programmatically navigate to the cart page

  const productData = [
    {
      id: 1,
      name: "브랜드A",
      price: 35000,
      image: "/image/1.png",
      description: "편안하고 착용감이 좋은 신발",
    },
    {
      id: 2,
      name: "브랜드A",
      price: 25000,
      image: "/image/2.png",
      description: "힙한 컬러가 매력적인 신발",
    },
    {
      id: 3,
      name: "브랜드B",
      price: 35000,
      image: "/image/3.png",
      description: "편안하고 착용감이 좋은 신발",
    },
    {
      id: 4,
      name: "브랜드B",
      price: 35000,
      image: "/image/4.png",
      description: "힙한 컬러가 매력적인 신발",
    },
    {
      id: 5,
      name: "브랜드C",
      price: 45000,
      image: "/image/5.png",
      description: "매력적인 스타일의 신발",
    },
    {
      id: 6,
      name: "브랜드C",
      price: 45000,
      image: "/image/6.png",
      description: "매력적인 스타일의 신발",
    },
  ];

  // Handle adding to cart with a default quantity of 1
  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 }); // Add product with quantity 1
  };

  // Handle "Buy Now" and navigate to cart page
  const handleBuyNow = (product) => {
    addToCart({ ...product, quantity: 1 }); // Add product with quantity 1
    navigate("/cart"); // Redirect to the cart page
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">신발 상품 목록</h1>
      <p className="mb-6">현재 {productData.length}개의 상품이 있습니다.</p>
      <div className="grid grid-cols-2 gap-6">
        {productData.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg"
          >
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative w-full ">
                <img
                  src={process.env.PUBLIC_URL + product.image}
                  alt={product.name}
                  className="object-cover w-full h-40 rounded-md"
                />
              </div>
              <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
            </Link>
            <p className="text-lg font-bold mt-2">{product.price}원</p>
            <div className="mt-4 flex space-x-2">
              <button
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                onClick={() => handleAddToCart(product)} // Add to cart with quantity 1
              >
                담기
              </button>
              {/* 구매 버튼 클릭 시 장바구니로 이동 */}
              <button
                className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300"
                onClick={() => handleBuyNow(product)} // Add to cart and navigate
              >
                구매
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
