import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import clienteAxios from "../../config/axios";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "../Product/Product.css";
import { Rating } from "@mui/material";
function Product() {
  const productId = useParams();
  const [product, setProduct] = useState([]);
  const [value, setValue] = useState(2);
  const [count, setCount] = useState("");
  let cart = [];
  useEffect(() => {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    clienteAxios
      .get(`products/${productId.id}`)
      .then((res) => {
        setProduct(res.data);
        setValue(res.data.rating.rate);
        setCount(res.data.rating.count);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(product);
  function addToCart() {
    if (localStorage.getItem("cart")) {
      const cartArray = localStorage.getItem("cart");
      const a = JSON.parse(cartArray);
      const c = a.push(product);
      const b = [...a];
      console.log(b);
      localStorage.setItem("cart", JSON.stringify(b));
    }
  }
  return (
    <>
      <Header></Header>
      <div className="product-detail-cn">
        <div className="product-detail-img-cn">
          <InnerImageZoom
            src={product.image || ""}
            zoomScale={2}
          ></InnerImageZoom>
        </div>
        <div className="product-detail-info">
          <h1>{product.title}</h1>
          <div>
            <Rating name="read-only" value={value} readOnly />
            <p className="ratings">{count} ratings</p>
          </div>
          <p>
            Price <span className="product-detail-price">${product.price}</span>
          </p>
          <p>{product.description}</p>
        </div>
        <div className="add-and-buy">
          <p>Arrives: Sep 22 - 30</p>
          <p>Deliver to Argentina</p>
          <button className="add-cart-btn" onClick={addToCart}>
            Add to Cart
          </button>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </>
  );
}

export default Product;
