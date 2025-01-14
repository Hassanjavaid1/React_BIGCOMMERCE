import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MyContext } from "./ContextHook";

function Navbar() {
  const { totalCartItem } = useContext(MyContext);
  console.log(totalCartItem);

  return (
    <>
      <div className="bg-[lavender]">
        <div className="container mx-auto px-12 py-6 flex items-center justify-between">
          <div className="font-semibold">
            <Link to="/">
              <span className="text-blue-600 text-4xl">BIG</span>
              <span className="text-3xl">COMMERCE</span>
            </Link>
          </div>
          <div className="flex items-center gap-8 text-lg font-semibold">
            <Link className="nav_link" to="/">
              Home
            </Link>
            <Link className="nav_link" to="/product">
              Categories
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <button className="bg-blue-500 px-6 py-3 text-white text-lg">
              Login
            </button>
            <Link to="/cart" className="relative overflow-hidden">
              <FiShoppingCart className="text-[2.6rem] cursor-pointer hover:text-blue-500" />
              <span className="absolute top-[16%] left-2/4">
                {totalCartItem}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
