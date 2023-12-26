import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContextProvider";
import "../CSS/Product.css";
import { Link } from "react-router-dom";
import ProductSkeleton from "./ProductSkeleton";
import "../CSS/ProductSkeleton.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function All_Products() {
  const [displayedData, setDisplayedData] = useState([]);
  const [loading, setloading] = useState(true);
  const {
    setproductData,
    productData,
    setproductTag,
    categoryData,
    setcategoryData,
    cartId,
    setcartId,
  } = useContext(MyContext);
  const handleCategoryChange = async (categoryTag) => {
    try {
      let newData;
      if (categoryTag === "products") {
        newData = productData;
      } else {
        // Fetch and set category-specific data
        const category_url = await fetch(
          `https://fakestoreapi.com/products/category/${categoryTag}`
        );
        const category_data = await category_url.json();
        setcategoryData(category_data);
        newData = category_data;
        setloading(false);
      }

      setproductTag(categoryTag); // Set the productTag in the context
      setDisplayedData(newData);
    } catch (error) {
      console.error(error);
      setloading(false);
    }
  };

  useEffect(() => {
    // Fetch initial data on component mount
    const fetchData = async () => {
      try {
        const url = await fetch("https://fakestoreapi.com/products?sort=desc");
        const data = await url.json();
        setproductData(data);
        setDisplayedData(data);
        setloading(false);
      } catch (error) {
        console.error(error);
        setloading(false);
      }
    };
    fetchData();
  }, [setproductData]);

  const notify = () => toast("Product had been added to cart!");

  const renderProducts = () => {
    return displayedData.map(({ title, price, image, id }) => (
      <div key={title} className="sub_product_content">
          {loading ? (
            <ProductSkeleton />
          ) : (
            <>
            <Link to={`/productdetail/${id}`} className="product_detail_link">
              <img src={image} className="product_image" alt="" />
              <div className="img_descripition">
                <div className="title">{title}</div>
                <div className="price">${price}</div>
              </div>
              </Link>
                <button className="buy_now" onClick={()=> {handleCartId(id);notify()}}>Buy Now</button>
                <ToastContainer />

            </>
          )}
        </div>
    ));
  };

  const handleCartId = (id)=>{
    setcartId(id)
    console.log(cartId)
}
  return (
    <div className="All_product_container">
      <div className="product">
        <h2>Latest Products</h2>
        <div className="product_content">
          <div className="products_filter">
            <button
              className="main_product"
              onClick={() => handleCategoryChange("products")}
            >
              All Products
            </button>
            <button
              className="main_product"
              onClick={() => handleCategoryChange("men's clothing")}
            >
              Men's Clothing
            </button>
            <button
              className="main_product"
              onClick={() => handleCategoryChange("women's clothing")}
            >
              Women's Clothing
            </button>
            <button
              className="main_product"
              onClick={() => handleCategoryChange("jewelery")}
            >
              Jewelry
            </button>
            <button
              className="main_product"
              onClick={() => handleCategoryChange("electronics")}
            >
              Electronics
            </button>
          </div>
        </div>
      </div>
      <div className="product_content">{renderProducts()}</div>
    </div>
  );
}

export default All_Products;
