import React from "react";
import '../components/CategoryProduct.css'
function CategoryProduct({ props }) {
  console.log(props);
  return (
    <div className="product-cn" onClick={()=>console.log(props.id)}>
      <div className="product-img-cn">
        <img src={props.image} alt={props.title}></img>
      </div>
<div className='title-and-price-cn'>
<p>{props.title}</p>
<p>US${props.price}<span>(US${props.rating.count})</span></p>
</div>
      
    </div>
  );
}
export default CategoryProduct;
