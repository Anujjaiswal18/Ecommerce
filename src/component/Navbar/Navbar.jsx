import React, { useContext } from "react";
import NavbarLinks from "./NavbarLinks";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";

const Navbar = () => {
  const {searchCart , setSearchCart} = useContext(Context)
  return (
    <>
      <div className="main-nav">
        {/* // upper navbar */}
        <nav className="upper-nav">
          <div className="logo">
            <span className="logo-txt">AJ-Store</span>
          </div>
          <div className="search-section">
            <input
              className="search-box"
              type="text"
              name="search"
              id=""
              placeholder="Search Here.."
              value={searchCart}
              onChange={(e)=> setSearchCart(e.target.value)}
            />
            {/* this is for cart icon */}
            <NavLink to="addToCart">
            <button className="cart">
             
                <FaCartShopping className="cart-icon" />
             
            </button>
            </NavLink>
          </div>
        </nav>

        {/* // lower Nav bar--- */}
        <div className="navbar-lower">
          <ul>
            {NavbarLinks.map((cur) => (
              <li key={cur.id}>
                <NavLink
                  to={cur.link}
                  className={({ isActive }) =>
                    isActive ? "active" : "deActive"
                  }
                >
                  {cur.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
