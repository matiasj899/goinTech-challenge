import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import clienteAxios from "../config/axios";

import Header from "./Header";

function SingIn() {
  const history=useHistory()
  const token = JSON.parse(localStorage.getItem("user"));
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    clienteAxios
      .post("auth/login", data)
      .then((res) => {
        if (res.data.token) {
          const token = res.data.token;

          localStorage.setItem("user", JSON.stringify(token));
          history.push('/')
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(watch("username"));
  return (
    <>
      {token ? (
        <p>Cerrar sesion</p>
      ) : (
        <>
        <div id='signin-cn'>
          <h1>Gointech</h1>
          <div className='form-cn'>
            <h2>Sign-In
</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Username
            <input type="text" {...register("username")}></input>
          </label>
          <label>
            Password
            <input
              type="password"
              {...register("password", { required: true })}
            ></input>
          </label>
          {errors.password && <span>This field is required</span>}
          
          <input type="submit" value='sign in' className='submit-btn'></input>
        
         
        </form>
          </div>
       
        </div>
       
        </>
      )}
    </>
  );
}

export default SingIn;
