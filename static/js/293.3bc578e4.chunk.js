"use strict";(self.webpackChunkecommerce_app=self.webpackChunkecommerce_app||[]).push([[293],{6293:(e,t,i)=>{i.r(t),i.d(t,{default:()=>u});var n=i(2791),s=i(7689),a=i(6355),c=i(3063),l=i(9085),o=(i(5462),i(8290)),d=(i(2150),i(184));const r=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"detail_skeleton",children:[(0,d.jsx)("div",{className:"sub_detail_skeleton",children:(0,d.jsx)(o.Z,{className:"detail_skeleton_img"})}),(0,d.jsxs)("div",{className:"detail_desc_skeleton",children:[(0,d.jsx)(o.Z,{className:"detail_skeleton_category"}),(0,d.jsx)(o.Z,{count:2,className:"detail_title_price_skeleton"}),(0,d.jsx)(o.Z,{count:5,className:"detail_desc_skeleton"}),(0,d.jsx)(o.Z,{circle:!0,className:"detail_button_skeleton"})]})]})})};const u=function(){const[e,t]=(0,n.useState)([]),[i,o]=(0,n.useState)(!0),{cartId:u,setcartId:m}=(0,n.useContext)(c.I),{id:h}=(0,s.UO)();return console.log(h),(0,n.useEffect)((()=>{(async()=>{const e=await fetch("https://fakestoreapi.com/products/".concat(h)),i=await e.json();console.log(i),t(i),o(!1)})(),console.log(e)}),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{id:"productDetail",children:i?(0,d.jsx)(r,{}):(0,d.jsxs)("div",{id:"sub_productDetail",children:[(0,d.jsx)("img",{src:e.image,id:"detail_img",alt:""}),(0,d.jsxs)("div",{id:"main_detail_desc",children:[(0,d.jsx)("div",{id:"detail_category",children:e.category}),(0,d.jsx)("div",{id:"detail_title",children:e.title}),(0,d.jsxs)("div",{id:"detail_rating_price",children:["$",e.price,(0,d.jsxs)("span",{id:"detail_rating",children:["4.1",(0,d.jsx)(a.QJe,{id:"rating_star"})]})]}),(0,d.jsx)("div",{id:"detail_desc",children:e.description}),(0,d.jsxs)("div",{id:"cart",children:[(0,d.jsx)("button",{id:"add_to_cart",onClick:()=>{(e=>{m(e),console.log(u)})(e.id),(0,l.Am)("Product had been added to cart!")},children:"Add to Cart"}),(0,d.jsx)(l.Ix,{})]})]})]})})})}},2150:()=>{},8290:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(2791);const s=n.createContext({}),a=!0;function c(e){let{baseColor:t,highlightColor:i,width:n,height:s,borderRadius:c,circle:l,direction:o,duration:d,enableAnimation:r=a}=e;const u={};return"rtl"===o&&(u["--animation-direction"]="reverse"),"number"===typeof d&&(u["--animation-duration"]="".concat(d,"s")),r||(u["--pseudo-element-display"]="none"),"string"!==typeof n&&"number"!==typeof n||(u.width=n),"string"!==typeof s&&"number"!==typeof s||(u.height=s),"string"!==typeof c&&"number"!==typeof c||(u.borderRadius=c),l&&(u.borderRadius="50%"),"undefined"!==typeof t&&(u["--base-color"]=t),"undefined"!==typeof i&&(u["--highlight-color"]=i),u}function l(e){let{count:t=1,wrapper:i,className:l,containerClassName:o,containerTestId:d,circle:r=!1,style:u,...m}=e;var h,p,_;const f=n.useContext(s),x={...m};for(const[n,s]of Object.entries(m))"undefined"===typeof s&&delete x[n];const g={...f,...x,circle:r},j={...u,...c(g)};let b="react-loading-skeleton";l&&(b+=" ".concat(l));const y=null!==(h=g.inline)&&void 0!==h&&h,v=[],k=Math.ceil(t);for(let s=0;s<k;s++){let e=j;if(k>t&&s===k-1){const i=null!==(p=e.width)&&void 0!==p?p:"100%",n=t%1,s="number"===typeof i?i*n:"calc(".concat(i," * ").concat(n,")");e={...e,width:s}}const i=n.createElement("span",{className:b,style:e,key:s},"\u200c");y?v.push(i):v.push(n.createElement(n.Fragment,{key:s},i,n.createElement("br",null)))}return n.createElement("span",{className:o,"data-testid":d,"aria-live":"polite","aria-busy":null!==(_=g.enableAnimation)&&void 0!==_?_:a},i?v.map(((e,t)=>n.createElement(i,{key:t},e))):v)}}}]);
//# sourceMappingURL=293.3bc578e4.chunk.js.map