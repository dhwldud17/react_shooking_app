import React, { useState } from "react";
import Card from "./Card";

export default function ProductList({ onCartCountChange }) {
  const products = [
    {
      img: "/image/1.png",
      brand: "브랜드A",
      desc: "편안하고 착용감이 좋은 신발",
      price: "35000원",
    },
    {
      img: "/image/2.png",
      brand: "브랜드A",
      desc: "편안하고 착용감이 좋은 신발",
      price: "35000원",
    },
    {
      img: "/image/3.png",
      brand: "브랜드A",
      desc: "편안하고 착용감이 좋은 신발",
      price: "35000원",
    },
    {
      img: "/image/4.png",
      brand: "브랜드A",
      desc: "편안하고 착용감이 좋은 신발",
      price: "35000원",
    },
    {
      img: "/image/5.png",
      brand: "브랜드A",
      desc: "편안하고 착용감이 좋은 신발",
      price: "35000원",
    },
    {
      img: "/image/6.png",
      brand: "브랜드A",
      desc: "편안하고 착용감이 좋은 신발",
      price: "35000원",
    },
  ];

  return (
    <div style={{ width: "429px" }}>
      <h1 className="font-bold pt-4 " style={{ fontSize: "30px" }}>
        신발 상품 목록
      </h1>
      <p style={{ fontSize: "16px" }}>
        현재 {products.length}개의 상품이 있습니다.
      </p>
      <ul style={{ width: "429px" }} className="grid grid-cols-2 ">
        {products.map((products, idx) => (
          <Card
            key={idx}
            brand={products.brand}
            desc={products.desc}
            price={products.price}
            img={products.img}
            onCartCountChange={onCartCountChange}
          ></Card>
        ))}
      </ul>
    </div>
  );
}
