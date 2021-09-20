import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import clienteAxios from "../../config/axios";
function Cart() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    clienteAxios
      .get(`carts/user/2`)
      .then((res) => {
       const data= res.data.map((product) => product.products[0]);
       data.map(x=>console.log(x.productId))
      })
      .catch((err) => console.log(err));
  }, []);
 
  return (
    <>
      <Header></Header>
    </>
  );
}
export default Cart;
