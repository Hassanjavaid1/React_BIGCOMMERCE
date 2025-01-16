import React from "react";
import Skeleton from "react-loading-skeleton";
import "../CSS/ProductSkeleton.css";
function ProductSkeleton() {
  return (
    <>
      <div className="productSkeleton">
        <div className="sub_product_skeleton">
          <Skeleton circle className="product_skeleton_img" />
          <div className="product_skeleton_desc">
            <Skeleton className="product_skeleton_title" />
            <Skeleton className="product_skeleton_price" />
            <Skeleton className="product_skeleton_button" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSkeleton;
