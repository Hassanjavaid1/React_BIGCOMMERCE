import { lazy, useContext, useEffect, useState, Suspense } from "react";
import "./App.css";
import Navbar from "./Components/JavaScript/Navbar";
import "react-slideshow-image/dist/styles.css";
import "react-slideshow-image/dist/styles.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import ScrollTop from "./Components/JavaScript/ScrollTop";

import ContextHook, { MyContext } from "./Components/JavaScript/ContextHook";
import { Router, Routes, Route, Link } from "react-router-dom";
import AddToCart from "./Components/JavaScript/AddToCart";
const HeroBanners = lazy(() => import("./Components/JavaScript/HeroBanners"));
const Footer = lazy(() => import("./Components/JavaScript/Footer"));
const HomeProducts = lazy(() => import("./Components/JavaScript/HomeProducts"));
const CategoryProduct = lazy(() =>
  import("./Components/JavaScript/ProductCategories")
);
const ProductCategories = lazy(() =>
  import("./Components/JavaScript/ProductCategories")
);
const ProductDetail = lazy(() =>
  import("./Components/JavaScript/ProductDetail")
);
//import second from 'DummyApi.json'
function App() {
  const [loading, setloading] = useState(false);

  return (
    <>
      <Suspense fallback={loading}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <HeroBanners loading={loading} />
                <HomeProducts loading={loading} />
              </>
            }
          />
          <Route exact path="/product" element={<ProductCategories />} />
          <Route exact path="/ProductDetail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<AddToCart />} />
        </Routes>
        <ScrollTop />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
