import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollTop() {
  const [showScroll, setShowScroll] = useState(false);

  console.log(window.scrollY);
  const handleTopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowScroll(window.scrollY >= 25);
    });
  }, []);

  return (
    <>
      {showScroll && (
        <FaArrowUp
          onClick={handleTopScroll}
          className="hidden bg-blue-500 text-white text-2xl fixed bottom-10 right-10 w-14 h-14 p-3 z-50 hover:scale-95 md:block"
        />
      )}
    </>
  );
}
