import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { MyContext } from "./MyContextProvider";

function Navbar() {
  const { Show, setShow, getCart, setgetCart } = useContext(MyContext);
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();
  if (isLoading) {
    return (
      <div
        style={{
          textAlign: "center",
          FontSize: "2rem",
          fontWeight: "500",
          opacity: "0.7",
        }}
      >
        Loading ...
      </div>
    );
  }
  const HideShow = () => {
    if (Show == "Hide") {
      setShow("Show");
    } else {
      setShow("Hide");
    }
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar_content">
          <div className="nav_title">
            <Link to="/">
              <span id="big">BIG</span>
              <span id="commerce">COMMERCE</span>
            </Link>
          </div>
          <div className="nav_link_section">
            <Link className="nav_link" to="/">
              Home
            </Link>
            <Link className="nav_link" to="/product">
              Products
            </Link>
            <Link className="nav_link" to="/about">
              About
            </Link>
            <Link className="nav_link" to="/contact">
              Contact
            </Link>
          </div>
          <div className="login">
            {isAuthenticated ? (
              <>
                <div className="auth_container">
                  <img src={user.picture} id="user_img" alt={user.name} />
                  <div className="sub_info">
                    <span id="welcome">Welcome!</span>
                    <span id="user_name">{user.name}</span>
                  </div>
                </div>
                <button
                  id="logout"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </>
            ) : (
              <button id="login" onClick={() => loginWithRedirect()}>
                Login
              </button>
            )}
            <div className="shop_carts">
              <FiShoppingCart className="shoping_cart" onClick={HideShow} />
              <span id="getCartLength">{getCart.length}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
