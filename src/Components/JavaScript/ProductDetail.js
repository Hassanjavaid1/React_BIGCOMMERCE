import React, { useContext, useEffect, useState } from 'react'
import '../CSS/productDetail.css'
import { Link, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { MyContext } from './MyContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Detail_Skeleton from './Detail_Skeleton';

function ProductDetail() {
  const [productDetail,setproductDetail] = useState([])
  const [loading,setloading] = useState(true)
  const {cartId,setcartId} = useContext(MyContext)
  const {id} = useParams()
  console.log(id)
  const fetchProudctDetail = async()=>{
    const url =await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await url.json()
    console.log(data)
    setproductDetail(data)
    setloading(false)
  }
  useEffect(()=>{
    fetchProudctDetail()
    console.log(productDetail)
  },[])
  const handleCartId = (id)=>{
    setcartId(id)
    console.log(cartId)
}
const notify = () => toast("Product had been added to cart!");


  return (
    <>
    <div id="productDetail">
  {loading? (
      <Detail_Skeleton/>
  ):(
        <div id="sub_productDetail">
          <img src={productDetail.image} id='detail_img' alt="" />
          <div id="main_detail_desc">
            <div id="detail_category">{productDetail.category}</div>
            <div id="detail_title">{productDetail.title}</div>
            <div id="detail_rating_price">${productDetail.price}<span id='detail_rating'>4.1<FaStar id='rating_star' /></span></div>
            <div id="detail_desc">{productDetail.description}</div>
           <div id="cart">
            <button id="add_to_cart" onClick={()=> {handleCartId(productDetail.id);notify()}}>Add to Cart</button>
            <ToastContainer />

                     </div>
          </div>
        </div>
  )}
      </div>
    </>
  )
}

export default ProductDetail
