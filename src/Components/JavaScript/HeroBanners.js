import React, { useContext, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import { Link } from "react-scroll";
import bg1 from "../Images/bg1.jpg";
import bg2 from "../Images/bg2.jpg";
import bg3 from "../Images/bg3.jpg";
import bg4 from "../Images/bg4.jpg";
import bg5 from "../Images/bg5.jpg";
import bg6 from "../Images/bg6.jpg";
import bg7 from "../Images/bg7.jpg";
import Products from "./HomeProducts";
import Skeleton from "react-loading-skeleton";
import { MyContext } from "./ContextHook";

function Background_banner() {
  const { loading, setLoading } = useContext(MyContext);

  const slideImages = [
    {
      url: bg1,
    },
    {
      url: bg2,
    },
    {
      url: bg3,
    },
    {
      url: bg4,
    },
    {
      url: bg5,
    },
    {
      url: bg6,
    },
    {
      url: bg7,
    },
  ];

  const properties = {
    duration: 555000,
    transitionDuration: 55500,
    infinite: true,
    easing: "ease",
    auto: false,
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, []);
  return (
    <>
      <div className="container mx-auto p-2 lg:p-8  lg:py-14">
        <Slide {...properties}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              {loading ? (
                <Skeleton height={"25rem"} borderRadius={"0rem!important"} />
              ) : (
                <Link to="Products" spy={true} smooth={true} duration={250}>
                  <div className="flex items-center justify-center">
                    <img
                      src={slideImage.url}
                      className="rounded-lg object-cover w-full"
                      alt=""
                    />
                  </div>
                </Link>
              )}
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
}

export default Background_banner;
