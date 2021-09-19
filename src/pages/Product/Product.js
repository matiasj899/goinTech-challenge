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
  const[count,setCount]=useState('')
  useEffect(() => {
    clienteAxios
      .get(`products/${productId.id}`)
      .then((res) => {
        setProduct(res.data);
        setValue(res.data.rating.rate);
        setCount(res.data.rating.count)
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(product);
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
        <div>
          <h1>{product.title}</h1>
          <div>
            <Rating name="read-only" value={value} readOnly />
            <p>{count} ratings</p>
          </div>
         <p>${product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
}

export default Product;
