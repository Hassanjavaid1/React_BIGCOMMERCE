import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MyContext } from "./ContextHook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailSkeleton from "../Skeleton/DetailSkeleton";
import placeholder from "../Images/placeholder.jpg";

function ProductDetail() {
  const { productData, totalCartItem, setTotalCartItem } =
    useContext(MyContext);
  const [productDetail, setproductDetail] = useState([]);
  const [loading, setloading] = useState(false);
  const { id } = useParams();
  console.log(id);
  console.log(productDetail);
  const fetchProudctDetail = async () => {
    // const url = await fetch(`https://fakestoreapi.com/products/${id}`);
    // const data = await url.json();
    // console.log(data);
    // setproductDetail(data);
    // setloading(false);
  };
  useEffect(() => {
    fetchProudctDetail();
    console.log(productDetail);
  }, []);

  const handleCartData = () => {
    let newData = JSON.parse(localStorage.getItem("cartData")) || [];

    //Check Duplicate Value

    let isValueExist = newData.filter(
      (items) => items.id == productData.homeData[0].id
    );
    if (isValueExist.length > 0) {
      toast("Product already exist in your cart.");
    } else {
      newData.push(productData.homeData[0]);
      localStorage.setItem("cartData", JSON.stringify(newData));
      setTotalCartItem(newData.length);
      console.log(newData);
    }
  };
  const notify = () => toast("Product had been added to cart!");

  return (
    <>
      <div className="bg-[#b7b7e3]">
        <div className="container mx-auto p-8 lg:py-20">
          {loading ? (
            <DetailSkeleton />
          ) : (
            <div className="flex items-center justify-center gap-8">
              <img
                src={placeholder || productData.homeData[0].image}
                className="w-full object-cover lg:w-2/6 lg:h-[35rem]"
                alt=""
              />
              <div className="flex flex-col items-baseline gap-4 lg:w-2/5">
                <h4 className="font-semibold text-lg uppercase">
                  {productData.homeData[0].category}
                </h4>
                <h2 className="text-2xl font-normal">
                  {productData.homeData[0].title}
                </h2>
                <div className="flex items-center gap-6 text-2xl">
                  <h2>${productData.homeData[0].price}</h2>
                  <div className="flex items-center gap-1 font-semibold">
                    4.1
                    <FaStar className="text-yellow-500" />
                  </div>
                </div>
                <p>{productData.homeData[0].description}</p>
                <div>
                  <button
                    onClick={handleCartData}
                    className="bg-blue-500 text-white font-semibold px-5 py-2 text-lg focus:border-0"
                  >
                    Add to Cart
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
