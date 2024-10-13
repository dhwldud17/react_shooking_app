import React from 'react';

export default function Card({ img, brand, desc, price, onCartCountChange }) {
  const onClick=()=>{
    onCartCountChange(prev=>prev+1)


  }
  return (
    <li className="shadow-md rounded-lg p-2 ">
      <img className=" rounded-t-lg overflow-hidden" src={img} alt="" />
      <div className="m-4">
        <h1 className="pb-1">{brand}</h1>
        <p className="text-xs">{desc}</p>
        <p className="text-s">{price}</p>
        <button onClick={onClick} className="bg-black text-white text-xs p-1 pr-3 pl-3 fs rounded-full">
          담기
        </button>
      </div>
    </li>
  );
}

