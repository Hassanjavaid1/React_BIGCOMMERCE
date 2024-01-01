import { lazy, useContext, useEffect, useState, Suspense } from "react";
import "./App.css";
import Navbar from "./Components/JavaScript/Navbar";
import "react-slideshow-image/dist/styles.css";
import "react-slideshow-image/dist/styles.css";
import ScrollToTop from "react-scroll-to-top";
import "react-loading-skeleton/dist/skeleton.css";
import MyContextProvider, {
  MyContext,
} from "./Components/JavaScript/MyContextProvider";
import { BrowserRouter } from "react-router-dom";
import { Router, Routes, Route, Link } from "react-router-dom";
import AddToCart from "./Components/JavaScript/AddToCart";
const Background_banner = lazy(() =>
  import("./Components/JavaScript/Background_banner")
);
const Footer = lazy(() => import("./Components/JavaScript/Footer"));
const Products = lazy(() => import("./Components/JavaScript/Products"));
const CategoryProduct = lazy(() =>
  import("./Components/JavaScript/All_Products")
);
const All_Products = lazy(() => import("./Components/JavaScript/All_Products"));
const ProductDetail = lazy(() =>
  import("./Components/JavaScript/ProductDetail")
);
const About = lazy(() => import("./Components/JavaScript/About"));
const Contact = lazy(() => import("./Components/JavaScript/Contact"));
const NoPageFound = lazy(() =>
  import("./Components/JavaScript/NoPageFound.js")
);

function App() {
  const [loading, setloading] = useState(true);
  const { productData, setproductData } = useContext(MyContext);
  const fetchData = async () => {
    try {
      const url = await fetch("https://fakestoreapi.com/products");
      const data = await url.json();
      setproductData(data);
      setloading(false);
    } catch (error) {
      console.error(error);
      setloading(false);
    }
  };
  useEffect(() => {
    console.log(productData);
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter basename="/React_BIGCOMMERCE">
        <Suspense fallback={loading}>
          <Navbar />
          <AddToCart />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <Background_banner loading={loading} />
                  <Products loading={loading} />
                </>
              }
            />
            <Route exact path="/product" element={<All_Products />} />
            <Route
              exact
              path="/ProductDetail/:id"
              element={<ProductDetail />}
            />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route path="/*" element={<NoPageFound />} />
          </Routes>
          <ScrollToTop smooth id="scroll_to_top" />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
