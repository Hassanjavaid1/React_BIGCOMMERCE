import React, { useState, useEffect, Children } from "react";
import { createContext } from "react";
import { useParams } from "react-router-dom";

const MyContext = createContext();

function ContextHook({ children }) {
  const { category } = useParams();
  const [productData, setProductData] = useState([]);
  const [categoryData, setcategoryData] = useState([]);
  const [productTag, setproductTag] = useState("products");
  const [cartId, setcartId] = useState("");
  const [Show, setShow] = useState("Hide");
  const [loading, setLoading] = useState(true);
  const [totalCartItem, setTotalCartItem] = useState(0);

  //Fetch Api;

  const fetchApiData = async () => {
    try {
      const url = await fetch("React_BIGCOMMERCE/DummyApi.json");
      const data = await url.json();
      setProductData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  let localStorageData = JSON.parse(localStorage.getItem("cartData")) || [];
  useEffect(() => {
    console.log(productData);
    fetchApiData();

    console.log(localStorageData);
    setTotalCartItem(localStorageData.length);
    console.log(totalCartItem);
  }, []);

  return (
    <>
      <MyContext.Provider
        value={{
          loading,
          setLoading,
          productData,
          setProductData,
          productTag,
          setproductTag,
          setcategoryData,
          categoryData,
          cartId,
          setcartId,
          Show,
          setShow,
          setTotalCartItem,
          totalCartItem,
          localStorageData
        }}
      >
        {children}
      </MyContext.Provider>
    </>
  );
}

export { MyContext, ContextHook };
