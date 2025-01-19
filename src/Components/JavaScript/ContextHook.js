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
  const [localStorageData, setLocalStorageData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );

  //Fetch Api;

  let apiURL = 'https://fakestoreapi.com/products'
  const fetchApiData = async () => {
    try {
     apiURL = "BIGCOMMERCE/DummyApi.json"
      const url = await fetch(apiURL);
      const data = await url.json();
      setProductData(data);
      setLoading(false);
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
          localStorageData,
          setLocalStorageData,
          totalCartItem,
          setTotalCartItem,
        }}
      >
        {children}
      </MyContext.Provider>
    </>
  );
}

export { MyContext, ContextHook };
