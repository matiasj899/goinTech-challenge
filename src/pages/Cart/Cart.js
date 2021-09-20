import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

import "./Cart.css";
import Footer from "../../components/Footer";
function Cart() {
  let totalPrice = [0];

  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const cartObjects = JSON.parse(localStorage.getItem("cart"));
      setCartProducts(cartObjects);
    }
  }, []);

  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  const cartItems = cartProducts.map((cartProduct) => {
    totalPrice.push(cartProduct.price);

    return (
      <div key={cartProduct.id} className="cart-cn">
        <div className="cart-img-cn">
          <img src={cartProduct.image} alt={cartProduct.title}></img>
        </div>

        <h3>{cartProduct.title}</h3>

        <p>${cartProduct.price}</p>
      </div>
    );
  });
  const finalPrice = totalPrice.reduce(reducer);

  return (
    <>
      <Header></Header>
      <h2 className='category-title'>Cart</h2>
      <div className="cart-page-cn">
        <div className='carts-wrapper'>{cartItems}</div>
        <div className="total-cn">
          <p>
            Subtotal ({cartProducts.length} items): <span>${finalPrice}</span>
          </p>
          <button>Proceed to checkout</button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Cart;
