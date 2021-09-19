import React from "react";
import { useForm } from "react-hook-form";
import clienteAxios from "../config/axios";
import Header from "./Header";

function SingIn() {
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
          console.log("has iniciado sesion");
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <input type="text" {...register("username")}></input>
          </label>
          <label>
            <input
              type="password"
              {...register("password", { required: true })}
            ></input>
          </label>
          {errors.password && <span>This field is required</span>}
          <input type="submit"></input>
        </form>
      )}
    </>
  );
}

export default SingIn;
