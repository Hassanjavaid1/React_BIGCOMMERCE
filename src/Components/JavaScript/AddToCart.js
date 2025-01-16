import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./ContextHook";
import { FaRegWindowClose } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import placeholder from "../Images/placeholder.jpg";
function AddToCart() {
  const { localStorageData, setLocalStorageData, setTotalCartItem } = useContext(MyContext);

  const [totalPrice, setTotalPrice] = useState(0);
  const [Pquantity, setPQuantity] = useState(1);

  console.log(Pquantity);

  // Get Data from localStorage.

  const removeFromCart = (productID) => {
    let dataToStore = localStorageData.filter((items) => items.id !== productID);
    localStorage.setItem("cartData", JSON.stringify(dataToStore));
    setLocalStorageData(dataToStore);
    setTotalCartItem(dataToStore.length);
  };

  const handleQtyChange = (e, currPrice, id) => {
    let inputVal = e.target.value;

    if (inputVal <= 0) {
      return setPQuantity(1);
    }

    setPQuantity((prevQty) => ({
      ...prevQty,
      [id]: Number(inputVal),
    }));

    setTotalPrice((prevPrice) => prevPrice + inputVal * currPrice);
  };

  const notify = () => toast("This feature comming soon!");

  const paymentCheckoutClick = () => {
    toast("This feature is in my todoList.");
  };

  useEffect(() => {
    // localStorageData.reduce((prevValue, currentVal) => {
    //   console.log("reduce:",prevValue,currentVal)
    //   return setTotalPrice(Number(prevValue.price) + Number(currentVal.price));
    // }, 0);
  }, []);
console.log("addtoCart:",localStorageData)
  return (
    <>
      <div className="container mx-auto p-16 py-24">
        {localStorageData.length < 1 ? (
          <div className="py-[4rem]">
            <h1 className="text-3xl border-b-2 text-center pb-8">
              No item added yet.
            </h1>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-6">
              {localStorageData.map(({ image, title, price, id, quantity }) => (
                <div
                  key={id}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={image || placeholder}
                      alt=""
                      className="w-[5rem]"
                    />
                    <div>
                      <p className="">{title.slice(0, 20)}</p>
                      <h4>${price}</h4>
                    </div>
                  </div>
                  <input
                    type="number"
                    name="quantity"
                    value={Pquantity[id] || 1}
                    onChange={(event) => handleQtyChange(event, price, id)}
                    className="border-2 p-1 font-semibold text-[1.2rem] text-center"
                  />
                  <FaRegWindowClose
                    onClick={() => removeFromCart(id)}
                    className="text-2xl cursor-pointer transition hover:scale-110"
                  />
                </div>
              ))}
            </div>
            <div className="w-1/2 flex flex-col items-normal gap-5 mt-14">
              <h1 className="text-2xl font-semibold">Items Total.</h1>
              <div className="flex items-center justify-between gap-2">
                <h3>Shipping Fee</h3>
                <span>$15</span>
              </div>
              <div className="flex items-center justify-between gap-2 font-semibold">
                <h3>Overall Total</h3>
                <span className="text-2xl">
                  ${Number(totalPrice).toFixed(2)}
                </span>
              </div>
              <button
                onClick={paymentCheckoutClick}
                className="mt-4 bg-blue-500 px-8 py-3 text-2xl text-white transition hover:scale-95 focus:border-0"
              >
                Checkout Now
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default AddToCart;
