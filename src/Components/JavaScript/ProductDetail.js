import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MyContext } from "./ContextHook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailSkeleton from "../Skeleton/DetailSkeleton";
import placeholder from "../Images/placeholder.jpg";
import AddToCart from "./AddToCart";

function ProductDetail() {
  const {
    setLocalStorageData,
    localStorageData,
    totalCartItem,
    setTotalCartItem,
  } = useContext(MyContext);

  const [productDetail, setProductDetail] = useState([]);

  const [detailLoading, setDetailLoading] = useState(true);

  const { id } = useParams();
  //console.log(id);

  const fetchProudctDetail = async () => {
    const url = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await url.json();
    //console.log(data);
    //console.log("mazi he mazi:", data);
    setProductDetail(data);
    setDetailLoading(false);
  };
  useEffect(() => {
    fetchProudctDetail();

    setTimeout(() => {
      setDetailLoading(false);
    }, 900);
  }, []);

  const handleCartData = () => {
    let newData = JSON.parse(localStorage.getItem("cartData")) || [];
    //console.log(newData);

    //Check Duplicate Value

    let isValueExist = newData.filter((items) => items.id == productDetail.id);
    if (isValueExist.length > 0) {
      toast("Product already exist in your cart.");
    } else {
      newData.push(productDetail);
      localStorage.setItem("cartData", JSON.stringify(newData));
    }
    setLocalStorageData(newData);
    setTotalCartItem(newData.length);
  };

  return (
    <>
      <div className="bg-[#b7b7e3]">
        <div className="container mx-auto p-8 lg:py-20">
          {detailLoading ? (
            <DetailSkeleton />
          ) : (
            <div className="flex items-center justify-center gap-8">
              <img
                src={productDetail.image || placeholder}
                className="w-full object-cover lg:w-2/6 lg:h-[35rem]"
                alt=""
              />
              <div className="flex flex-col items-baseline gap-4 lg:w-2/5">
                <h4 className="font-semibold text-lg uppercase">
                  {productDetail.category}
                </h4>
                <h2 className="text-2xl font-normal">{productDetail.title}</h2>
                <div className="flex items-center gap-6 text-2xl">
                  <h2>${productDetail.price}</h2>
                  <div className="flex items-center gap-1 font-semibold">
                    4.1
                    <FaStar className="text-yellow-500" />
                  </div>
                </div>
                <p>{productDetail.description}</p>
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
