import React from "react";
import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header className="flex justify-between p-4 bg-black text-white">
      <Link to="/" className="text-xl font-bold">
        Shooking
      </Link>
      <Link to="/cart" className="relative">
        <span
          className="material-icons text-lg"
          style={{ transform: "translateX(-10px)" }}
        >
          shopping_cart
        </span>
        {cartCount > 0 && (
          <span className="absolute bottom-0 right-0 bg-white text-black rounded-full px-1 py-0.5 text-xs">
            {cartCount}
          </span>
        )}
      </Link>
    </header>
  );
}

export default Header;
