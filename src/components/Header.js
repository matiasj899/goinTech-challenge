import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../components/header.css";
import clienteAxios from "../config/axios";

import AsyncSelect from "react-select/async";

function Header() {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [value, setValue] = useState("asd");
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
 
  const info='info'
  function searcher(e) {
    console.log(e)
    //const search = e.target.value.toLowerCase().replace(/\s/g, "");
    const dataFilter = info.filter((data) => {
      const title = data.title.toLowerCase().replace(/\s/g, "");
      //return title.includes(search);
    });

    setValue(dataFilter);
  }
  return (
    <>
      <header>
        <nav>
          <Link to="/" className="nav-logo">
            ABC
          </Link>
          <form>
            <label>
              <AsyncSelect
                isMulti
                defaultOptions={info}
             onInputChange={searcher}
              ></AsyncSelect>
            </label>
            <label>
              <input type="submit"></input>
            </label>
          </form>

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
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
