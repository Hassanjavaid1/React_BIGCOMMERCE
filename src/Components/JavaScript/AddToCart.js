import React, { useContext, useEffect, useState } from "react";
import "../CSS/AddToCart.css";
import { MyContext } from "./MyContextProvider";
import { FaRegWindowClose } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddToCart() {
  const { cartId, setcartId, Show, setShow, setgetCart, getCart } =
    useContext(MyContext);

  useEffect(() => {
    const fetchCart = async () => {
      if (cartId) {
        const url = await fetch(`https://fakestoreapi.com/products/${cartId}`);
        const data = await url.json();
        setgetCart((prevCart) => [...prevCart, { ...data, quantity: 1 }]);
      }
    };
    fetchCart();
  }, [cartId]);

  const HideShow = () => {
    if (Show == "Hide") {
      setShow("Show");
    } else {
      setShow("Hide");
    }
  };

  const deleteProduct = (productId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this item from the cart?"
      
    );
    if (!confirmDelete) {
      return;
    }

    // Optimistically update the UI by removing the product from the local state
    setgetCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );

    // Make the API call to delete the product
    fetch(`https://fakestoreapi.com/carts/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        // Optionally handle the response
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        // If the API call fails, revert the local state to maintain consistency
        setgetCart((prevCart) => [...prevCart, { id: productId, quantity: 1 }]);
      });
  };

  const updateQuantity = (productId, newQuantity) => {
    // Update the quantity for the specific product
    setgetCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };
  const notify = () => toast("This feature comming soon!");

  return (
    <>
    <div
        className={`container_addtocart ${Show}`}
        id={getCart.length > 0 ? "Show" : "Hide"}
      >
        <div className="cart_nav">
          <h4 id="shopping">
            Shopping items <span id="item_count">({getCart.length})</span>
          </h4>
          <FaRegWindowClose className="close_shopping" onClick={HideShow} />
        </div>

        <div className="Addtocart">
          {getCart.map(({ image, title, price, id, quantity }) => (
            <div className="sub_Addtocart" key={price}>
              {getCart.length == 0 || getCart == "" || getCart == null ? (
                <h1>No Shopping Cart Avaliable</h1>
              ) : (
                <>
                  <div className="img_title">
                    <img src={image} id="cart_img" alt="" />
                    <FaRegWindowClose
                      className="sub_close_shopping"
                      onClick={() => deleteProduct(id)}
                    />
                    <p className="cart_title">{title.slice(0, 20)}</p>
                  </div>
                  <div className="price_inc_dec">
                    <h5 id="price">
                      Price: <span id="cart_price">${price}</span>
                    </h5>
                    <div className="inc_dec_button">
                      <button id="total_cart">{quantity}</button>
                      <button
                        className="btn"
                        onClick={() => {
                          updateQuantity(id, quantity + 1);
                        }}
                      >
                        +
                      </button>
                      <button
                        className="btn"
                        onClick={() =>
                          updateQuantity(id, Math.max(1, quantity - 1))
                        }
                      >
                        -
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        {getCart.length == 0 || getCart == "" || getCart == null ? (
          <h2 style={{ textAlign: "center", fontSize: "1.4rem" }}>
            No Shopping Carts Added
          </h2>
        ) : (
          <>
            <div className="total_price">
              Total: $
              {getCart
                .reduce(
                  (total, product) => total + product.price * product.quantity,
                  0
                )
                .toFixed(1)}
            </div>
            <button id="check_out" onClick={()=> notify()}>Check Out</button>
            <ToastContainer />
          </>
        )}
      </div>
    </>
  );
}

export default AddToCart;
