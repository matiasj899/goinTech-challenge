import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../components/header.css";
import clienteAxios from "../config/axios";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import cartImg from './shopping-cart-solid.svg'
function Header() {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("user"));
  console.log(token);
  useEffect(() => {
    clienteAxios
      .get("products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
    clienteAxios
      .get("products")
      .then((res) => setSearchData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const eachCategory = categories.map((category) => (
    <li
      key={category}
      className="category-li"
      onClick={() => history.push(`/categories/${category}`)}
    >
      <p>{category}</p>
    </li>
  ));
  return (
    <>
      <header>
        <nav>
          <Link to="/" className="nav-logo">
            ABC
          </Link>
         

          <ul className="navbar-ul">
            <li
              onClick={() => setShowCategories(!showCategories)}
              className="eachCategory-cn"
            >
              Categories
              <ul className="eachCategory">
                {showCategories ? eachCategory : null}
                {showCategories ? (
                  <li
                    onClick={() => history.push(`/categories/all`)}
                    className="category-li"
                  >
                    See all
                  </li>
                ) : null}
              </ul>
            </li>
            <li>
              <Link to="/sell">Sell</Link>
            </li>
            {token ? (
              <li
                onClick={() => {
                  localStorage.removeItem("user");
                  history.push("/");
                }}
              >
                Sign out
              </li>
            ) : (
              <li>
                <Link to="/singin">Sing in</Link>
              </li>
            )}
            <li>
              <Link to="/cart"><img src={cartImg} alt='cart' id='cart-icon'></img>Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
