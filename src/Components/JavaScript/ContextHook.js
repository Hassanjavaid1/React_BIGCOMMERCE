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
  const [localStorageData, setLocalStorageData] = useState([]);

  //Fetch Api;

  const fetchApiData = async () => {
    try {
      if (!localStorageData) {
        const url = await fetch("React_BIGCOMMERCE/DummyApi.json");
        const data = await url.json();
        console.log("apna data:", data)
        setProductData(data);
        setLocalStorageData(data)
        setLoading(false);
      } else {
        setLocalStorageData(JSON.parse(localStorage.getItem("cartData")))
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApiData();
    setTotalCartItem(localStorageData.length);
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
