import React from "react";
import { Link } from "react-router-dom";
import '../components/header.css'

function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/" className='nav-logo'>GoinTech</Link>
          <form>
          <label>
              <input type='search'>

              </input>
          </label>
          <label>
              <input type='submit'>
              </input>
          </label>

              </form>

         
          <ul className='navbar-ul'>
              <li>
              <Link to="/categories">Categories</Link>
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
