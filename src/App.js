import "./App.css";
import { lazy, useContext, useEffect, useState, Suspense } from "react";
import { Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./Components/JavaScript/Navbar";
import ScrollTop from "./Components/JavaScript/ScrollTop";

const HeroBanners = lazy(() => import("./Components/JavaScript/HeroBanners"));
const HomeProducts = lazy(() => import("./Components/JavaScript/HomeProducts"));
const ProductCategories = lazy(() =>import("./Components/JavaScript/ProductCategories"));
const ProductDetail = lazy(() =>import("./Components/JavaScript/ProductDetail"));
const AddToCart = lazy(()=> import('./Components/JavaScript/AddToCart'))
const Footer = lazy(() => import("./Components/JavaScript/Footer"));

function App() {
  const [loading, setloading] = useState(false);

  return (
    <>
      <Suspense fallback={loading}>
        <Navbar />
        <Routes>
          <Route path="/BIGCOMMERCE" element={
              <>
                <HeroBanners/>
                <HomeProducts/>
              </>
            }/>
          <Route path="BIGCOMMERCE/:type" element={<ProductCategories />}/>
          <Route path="BIGCOMMERCE/ProductDetail/:id" element={<ProductDetail />} />
          <Route exact path="BIGCOMMERCE/cart" element={<AddToCart />} />

        </Routes>
        <ScrollTop />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
