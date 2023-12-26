import React, { useState } from "react";
import { createContext } from "react";
import App from "../../App";
import { useParams } from "react-router-dom";
const MyContext = createContext();
function MyContextProvider() {
  const { category } = useParams();
  const [productData, setproductData] = useState([]);
  const [categoryData, setcategoryData] = useState([]);
  const [productTag, setproductTag] = useState("products");
  const [cartId, setcartId] = useState("");
  const [Show, setShow] = useState("Hide");
  const [getCart, setgetCart] = useState([]);


  return (
    <>
      <MyContext.Provider
        value={{
          productData,
          setproductData,
          productTag,
          setproductTag,
          setcategoryData,
          categoryData,
          cartId,
          setcartId,
          Show,
          setShow,
          getCart,
          setgetCart,
        
        }}
      >
        <App />
      </MyContext.Provider>
    </>
  );
}

export default MyContextProvider;
export { MyContext };
