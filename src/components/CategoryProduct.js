import React from "react";
import "../components/CategoryProduct.css";
import { useHistory } from "react-router-dom";
function CategoryProduct({ props }) {
  const history = useHistory();
  console.log(props);
  return (
    <div
      className="product-cn"
      onClick={() => history.push(`/product/${props.id}`)}
    >
      <div className="product-img-cn">
        <img src={props.image} alt={props.title}></img>
      </div>
      <div className="title-and-price-cn">
        <p>{props.title}</p>
        <p>
          US${props.price}
         
        </p>
      </div>
    </div>
  );
}
export default CategoryProduct;
