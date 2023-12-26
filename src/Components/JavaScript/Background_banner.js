import React from "react";
import { Slide } from "react-slideshow-image";
import { Link } from "react-scroll"; 
import bg1 from "../Images/bg1.jpg";
import bg2 from "../Images/bg2.jpg";
import bg3 from "../Images/bg3.jpg";
import bg4 from "../Images/bg4.jpg";
import bg5 from "../Images/bg5.jpg";
import bg6 from "../Images/bg6.jpg";
import bg7 from "../Images/bg7.jpg";
import Products from "./Products";
import Skeleton from "react-loading-skeleton";

function Background_banner({ loading }) {
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
  return (
    <>
      <div className="bg_banner">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              {loading ? (
                <Skeleton height={"25rem"} borderRadius={"0rem!important"} />
              ) : (
             <Link to ='Products' spy={true} smooth={true} duration={250}>
                  <div className="hero_section">
                    <img src={slideImage.url} className="bg_image" alt="" />
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
