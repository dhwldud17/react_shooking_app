import React from "react";
import { useParams } from "react-router-dom";

const productData = {
  1: {
    id: 1,
    name: "브랜드A",
    price: 35000,
    image: "/image/1.png",
    description: "Great sneakers for running.",
  },
  2: {
    id: 2,
    name: "브랜드A",
    price: 25000,
    image: "/image/2.png",
    description: "Comfortable and stylish.",
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
    description: "Best choice for daily wear.",
  },
  5: {
    id: 5,
    name: "브랜드C",
    price: 45000,
    image: "/image/5.png",
    description: "Best choice for daily wear.",
  },
  6: {
    id: 6,
    name: "브랜드C",
    price: 45000,
    image: "/image/6.png",
    description: "Best choice for daily wear.",
  },
};

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = productData[id];

  return (
    <div className="p-4">
      <div className="relative w-full" style={{ paddingTop: "90%" }}>
        {/* Container with 4:3 aspect ratio */}
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Product Name: Bigger and Bold */}
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>

      {/* Swapped Price and Description */}
      <p className="text-lg font-semibold mt-2">{product.price}원</p>
      <p className="my-2">{product.description}</p>

      {/* Rounded "Add to Cart" Button */}
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-black text-white py-2 mt-4 rounded-full hover:bg-gray-800"
      >
        장바구니 담기
      </button>
    </div>
  );
}

export default ProductDetail;
