import React, { useContext, useEffect, useState } from "react";
import "../CSS/Product.css";
import { MyContext } from "./MyContextProvider";
import ProductSkeleton from "./ProductSkeleton";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Products({ loading }) {
  const {
    productData,
    setproductTag,
    categoryData,
    setcategoryData,
    cartId,
    setcartId,
    buy_now,
    setbuy_now,
  } = useContext(MyContext);
  const handleCartId = (id) => {
    setcartId(id);
    console.log(cartId);
  };

  const notify = () => toast("Product had been added to cart!");

  return (
    <div className="product_container">
      <Element name="Products">
        <div className="product">
          <h2>Top Products</h2>
          <div className="product_content">
            {productData.slice(0, 11).map(({ title, price, image, id }) => (
              <>
                {loading ? (
                  <ProductSkeleton />
                ) : (
                  <div key={title} className="sub_product_content">
                    <>
                      <Link
                        to={`/productdetail/${id}`}
                        className="product_detail_link"
                      >
                        <img src={image} className="product_image" alt="" />
                        <div className="img_descripition">
                          <div className="title">{title}</div>
                          <div className="price">${price}</div>
                        </div>
                      </Link>
                      <button
                        className="buy_now"
                        onClick={() => {
                          handleCartId(id);
                          notify();
                        }}
                      >
                        Buy Now
                      </button>
                      <ToastContainer />
                    </>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </Element>
    </div>
  );
}

export default Products;
