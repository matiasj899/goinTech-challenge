import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryProduct from "../../components/CategoryProduct";
import Header from "../../components/Header";
import clienteAxios from "../../config/axios";
import { Pagination } from "@mui/material";
import Footer from "../../components/Footer";
function Categories() {
  const categoryData = useParams();
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [count,setCount]=useState(1)
  useEffect(() => {
    if (categoryData.id !== "all") {
      clienteAxios
        .get(`products/category/${categoryData.id}`)
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    } else {
      clienteAxios
        .get(`products`)
        .then((res) => setCount(res.data.length/10))
        .catch((err) => console.log(err));
      clienteAxios
        .get(`products?limit=${limit}`)
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    }
  }, [categoryData.id, limit]);
function changePage(e){
console.log(e.target.value)
}
  const eachProduct = products.map((product) => (
    <CategoryProduct key={product.id} props={product}></CategoryProduct>
  ));
  console.log(products);
  return (
    <>
      <Header></Header>
      <h1>{categoryData.id}</h1>
      <section id="category">{eachProduct}</section>
      <div className="pagination-cn">
        <Pagination
          count={count}
          className="pagination"
          value={1}
          onChange={changePage}
        ></Pagination>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Categories;
