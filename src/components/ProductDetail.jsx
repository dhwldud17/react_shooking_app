import React from "react";
import { useParams } from "react-router-dom";

const productData = {
  1: {
    id: 1,
    name: "브랜드A",
    price: 35000,
    image: "/image/1.png",
    description: "편안하고 착용감이 좋은 신발.",
  },
  2: {
    id: 2,
    name: "브랜드A",
    price: 25000,
    image: "/image/2.png",
    description: "힙한 컬러가 매력적인 신발.",
  },
  3: {
    id: 3,
    name: "브랜드B",
    price: 45000,
    image: "/image/3.png",
    description: "Best choice for daily wear.",
  },
  4: {
    id: 4,
    name: "브랜드B",
    price: 45000,
    image: "/image/4.png",
    description: "힙한 컬러가 매력적인 신발",
  },
  5: {
    id: 5,
    name: "브랜드C",
    price: 45000,
    image: "/image/5.png",
    description: "매력적인 스타일의 신발.",
  },
  6: {
    id: 6,
    name: "브랜드C",
    price: 45000,
    image: "/image/6.png",
    description: "매력적인 스타일의 신발",
  },
};

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = productData[id];

  // 현재 상품 제외하고 같은 name 가진 상품 필터링
  const relatedProducts = Object.values(productData).filter(
    (item) => item.name === product.name && item.id !== product.id
  );

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="p-4">
      {/* 상품 상세 */}
      <div className="relative w-full">
        <img
          src={process.env.PUBLIC_URL + product.image}
          alt={product.name}
          className="object-cover w-full h-30 rounded-md"
        />
      </div>
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-lg font-semibold mt-2">{product.price}원</p>
      <p className="my-2">{product.description}</p>
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-black text-white py-2 mt-4 rounded-full hover:bg-gray-800"
      >
        장바구니 담기
      </button>

      {/* 관련 상품 */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">관련 상품</h2>
        <h2 className="text-0.4xl  mb-1">
          '{product.name}'의 다른 신발은 어떠신가요?
        </h2>
        <div className="flex gap-4 overflow-x-auto">
          {relatedProducts.map((item) => (
            <div key={item.id} className="min-w-[120px]">
              <div className="relative w-full aspect-square">
                {/* 1:1 비율 설정 */}
                <img
                  src={process.env.PUBLIC_URL + item.image}
                  alt={item.name}
                  className="absolute inset-0 object-cover w-full h-full rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
