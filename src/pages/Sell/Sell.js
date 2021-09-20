import React,{useState} from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import clienteAxios from "../../config/axios";
import Footer from "../../components/Footer";
import "./Sell.css";
function Sell() {
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("user"));
  const [advise,setAdvise]=useState(false)
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    clienteAxios
      .post("products", data)
      .then((res) => {
        if(res.status===200){
          setAdvise(true)
          reset({ email: "" });
          setTimeout(() => {
            setAdvise(false);
          }, 3000);
        };
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Header></Header>
      {token ? (
        <div>
            <h1 className='category-title'>Sell a new product</h1>
            <div className='sell-form-cn'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Title
              <input
                type="text"
                {...register("title", { required: true })}
              ></input>
               {errors.title && <span>This field is required</span>}
            </label>
            <label>
              Price
              <input
                type="number"
                {...register("price", { required: true })}
              ></input>
               {errors.price && <span>This field is required</span>}
            </label>
            <label>
              Description
              <input
                type="text"
                {...register("description", { required: true })}
              ></input>
               {errors.description && <span>This field is required</span>}
            </label>
            <label>
              Upload a image
              <input
              id='uploadImage'
                type="file"
                {...register("image", { required: true })}
              ></input>
               {errors.image && <span>This field is required</span>}
            </label>
            <label>
              Category
              <input
            
                type="text"
                {...register("category", { required: true })}
              ></input>
            </label>
            {errors.category && <span>This field is required</span>}
            <input type="submit"   id='submit'></input>
          </form>
          {advise?<div className='advise-cn'><p>New product created</p></div>:null}
            </div>
        
        </div>
      ) : (
        <>
          <section id="sell">
            <div className="sell-and-btn">
              <h2>Sell on Gointech</h2>
              <button onClick={() => history.push("/singin")}>Sign Up</button>
            </div>
            <div className="sell-info">
              <h3>Become an Gointech seller</h3>
              <p>
                More than half the units sold in our stores are from independent
                sellers.
              </p>
              <button
                onClick={() => history.push("/singin")}
                className="big-btn"
              >
                Sign Up
              </button>
            </div>
          </section>
          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default Sell;
