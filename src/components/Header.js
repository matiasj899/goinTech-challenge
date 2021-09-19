import React, { useEffect, useState } from "react";
import { Link ,useHistory} from "react-router-dom";
import "../components/header.css";
import clienteAxios from "../config/axios";

function Header() {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
const history=useHistory();

  useEffect(() => {
    clienteAxios
      .get("products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(categories);
  const eachCategory = categories.map((category) => (
    <li key={category} className='category-li' onClick={()=>history.push(`/categories/${category}`)}>
      <p >{category}</p>
    </li>
  ));
  return (
    <>
      <header>
        <nav>
          <Link to="/" className="nav-logo">
            ABC
          </Link>
          <form>
            <label>
              <input type="search" className='searcher'></input>
            </label>
            <label>
              <input type="submit"></input>
            </label>
          </form>

          <ul className="navbar-ul">
            <li onClick={() => setShowCategories(!showCategories)} className='eachCategory-cn'>
              Categories
              <ul className="eachCategory" >
                {showCategories ?  eachCategory  : null}
                {showCategories ?  <li onClick={()=>history.push(`/categories/all`)}>See all</li>  : null}
               
              </ul>
            </li>
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
