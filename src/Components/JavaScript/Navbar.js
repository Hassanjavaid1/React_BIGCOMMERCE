import React, { useContext, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MyContext } from "./ContextHook";

function Navbar() {
  const { totalCartItem } = useContext(MyContext);
  const [menu, setMenu] = useState(false);

  const handleMenuVisiblity = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };
  return (
    <>
      <div className="bg-[lavender]">
        <div className="container mx-auto p-6 flex items-center justify-between lg:px-12 lg:py-6">
          <div className="font-semibold text-2xl">
            <Link to="/BIGCOMMERCE">
              <span className="text-blue-600 lg:text-4xl">BIG</span>
              <span className="lg:text-3xl">COMMERCE</span>
            </Link>
          </div>
          <div onClick={handleMenuVisiblity} className="text-2xl lg:hidden">
            |||
          </div>
          <div className={`${menu ? "menuActive" : "hidden"} lg:!flex lg:!flex-row lg:!gap-96 lg:!static lg:!h-fit`}>
            <div className="flex flex-col items-center gap-4 text-lg font-semibold lg:flex-row lg:gap-8">
              <Link
                onClick={handleMenuVisiblity}
                className="nav_link"
                to="/BIGCOMMERCE"
              >
                Home
              </Link>
              <Link
                onClick={handleMenuVisiblity}
                className="nav_link"
                to="BIGCOMMERCE/All"
              >
                Categories
              </Link>
            </div>
            <div className="flex flex-col-reverse gap-4 items-center lg:flex-row lg:gap-8">
              <button
                onClick={handleMenuVisiblity}
                className="bg-blue-500 px-6 py-3 text-white text-lg"
              >
                Login
              </button>
              <Link
                to="BIGCOMMERCE/cart"
                onClick={handleMenuVisiblity}
                className="relative overflow-hidden"
              >
                <FiShoppingCart className="text-[2.6rem] cursor-pointer hover:text-blue-500" />
                <span className="absolute top-[16%] left-2/4">
                  {totalCartItem}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
