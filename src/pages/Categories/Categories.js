import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryProduct from "../../components/CategoryProduct";
import Header from "../../components/Header";
import clienteAxios from "../../config/axios";
function Categories() {
  const categoryData = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    clienteAxios
      .get(`products/category/${categoryData.id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [categoryData.id]);

  const eachProduct = products.map((product) => (
    <CategoryProduct key={product.id} props={product}></CategoryProduct>
  ));
  console.log(products);
  return (
    <>
      <Header></Header>
      <h1>{categoryData.id}</h1>
      <section id='category'>{eachProduct}</section>
    </>
  );
}

export default Categories;
