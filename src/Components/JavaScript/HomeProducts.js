import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./ContextHook";
import ProductSkeleton from "../Skeleton/ProductSkeleton";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import placeholder from "../Images/placeholder.jpg";

function HomeProduct() {
  const {
    productData,
    setproductTag,
    categoryData,
    setcategoryData,
    cartId,
    setcartId,
    loading,setLoading
  } = useContext(MyContext);

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, []);
  return (
    <div className="product_container">
      <div className="container mx-auto p-8 mt-2 text-center lg:mt-8">
        <Element name="Products">
          <h2 className="text-3xl"> Top Collections</h2>
          <div className="flex flex-wrap justify-center items-center gap-3 py-8">
            {productData.map(({ title, price, image, id }) => (
              <>
                {loading ? (
                  <ProductSkeleton />
                ) : (
                  <div
                    key={title}
                    className="flex flex-col items-center overflow-hidden h-full"
                  >
                    <>
                      <Link to={`ProductDetail/${id}`}>
                        <img
                          src={image || placeholder}
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
                    </>
                  </div>
                )}
              </>
            ))}
          </div>
        </Element>
      </div>
    </div>
  );
}

export default HomeProduct;
