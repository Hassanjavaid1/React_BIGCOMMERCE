import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./ContextHook";
import "../CSS/Product.css";
import { Link } from "react-router-dom";
import ProductSkeleton from "../Skeleton/ProductSkeleton";
import "../CSS/ProductSkeleton.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import placeholder from "../Images/placeholder.jpg";
function ProductCategories() {
  const {
    setproductData,
    productData,
    cartId,
    setcartId,
    loading,
    setLoading,
  } = useContext(MyContext);

  const [categoryType, setCategoryType] = useState([]);

  function handleProductCategory(category) {
    setLoading(true);
    if (category == "all") {
      setCategoryType(productData.homeData);
    } else {
      setCategoryType(
        productData.homeData.filter((items) => items.category == category)
      );
    }
    setTimeout(() => {
      setLoading(false);
    }, 900);
  }

  useEffect(() => {
    setCategoryType(productData.homeData);
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-center">Category Wise Products</h2>
      <ul className="flex items-center justify-center my-8 border-2 w-fit mx-auto">
        <li
          className="text-[1.4rem]  px-3 py-[.4rem] transition cursor-pointer hover:bg-blue-500 hover:text-white active:bg-red-500"
          onClick={() => handleProductCategory("all")}
        >
          {" "}
          All Products
        </li>
        <li
          className="text-[1.4rem]  px-3 py-[.4rem] transition cursor-pointer hover:bg-blue-500 hover:text-white active:bg-red-500"
          onClick={() => handleProductCategory("men's clothing")}
        >
          Men's Clothing
        </li>
        <li
          className="text-[1.4rem] px-3 py-[.4rem] transition cursor-pointer hover:bg-blue-500 hover:text-white"
          onClick={() => handleProductCategory("women's clothing")}
        >
          Women's Clothing
        </li>
        <li
          className="text-[1.4rem]  px-3 py-[.4rem] transition cursor-pointer hover:bg-blue-500 hover:text-white"
          onClick={() => handleProductCategory("jewelery")}
        >
          Jewelry
        </li>
        <li
          className="text-[1.4rem]  px-3 py-[.4rem] transition cursor-pointer hover:bg-blue-500 hover:text-white"
          onClick={() => handleProductCategory("electronics")}
        >
          Electronics
        </li>
      </ul>

      <div className="flex flex-wrap justify-center items-center gap-6 py-8">
        {categoryType.map(({ title, price, image, id }) => (
          <>
            {loading ? (
              <ProductSkeleton />
            ) : (
              <div
                key={title}
                className="flex flex-col items-center overflow-hidden h-full"
              >
                <>
                  <Link to={`/productdetail/${id}`}>
                    <img
                      src={placeholder}
                      className="h-[20rem] w-[20rem] object-cover overflow-hidden duration-500 hover:scale-x-110"
                      alt=""
                    />
                    <div className="mt-3 text-left">
                      <div className="text-base">
                        {String(title).slice(0, 20)}
                      </div>
                      <div className="text-md font-semibold">${price}</div>
                    </div>
                  </Link>

                  <ToastContainer />
                </>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default ProductCategories;
