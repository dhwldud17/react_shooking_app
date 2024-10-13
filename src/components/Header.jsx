import React from 'react';
import { BsCart } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";


export default function Header({cartCount}) {
    return (
      <header className=" bg-black" style={{ height: "69px" }}>
        {cartCount === 0 ? (
          <BsCart
            className="text-white float-right mr-6 mt-5"
            style={{ fontSize: "26px" }}
          />
        ) : (
          <>
            <BsCartFill
              className="text-white float-right mr-6 mt-5"
              style={{ fontSize: "26px" }}
            />
            <span
              className=" rounded-full w-4 h-4 bg-white float-right pl-1 pb-2 mt-3"
              style={{ fontSize: "12px" }}
            >
              {cartCount}
            </span>
          </>
        )}
      </header>
    );
       
        
        }

