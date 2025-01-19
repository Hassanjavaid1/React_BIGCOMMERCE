import React from "react";
import Skeleton from "react-loading-skeleton";
import "../CSS/ProductSkeleton.css";

function Detail_Skeleton() {
  return (
    <>
      <div className="detail_skeleton">
        <div className="sub_detail_skeleton">
          <Skeleton className="detail_skeleton_img" />
        </div>
        <div className="detail_desc_skeleton">
          <Skeleton className="detail_skeleton_category" />
          <Skeleton count={2} className="detail_title_price_skeleton" />
          <Skeleton count={5} className="detail_desc_skeleton" />

          <Skeleton circle className="detail_button_skeleton" />
        </div>
      </div>
    </>
  );
}

export default Detail_Skeleton;
