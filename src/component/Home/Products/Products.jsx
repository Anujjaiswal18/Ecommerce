import React from "react";
import ProductsItem from "./ProductsItem";
import { FaStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <div>
        {/* header section */}
        <div className="products-header">
          <p className="p1"> Selling Products for You</p>
          <h1 data-aos="fade-up">Products</h1>
          <p data-aos="fade-up" className="p2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* body section */}
        <div className="product-container">
          {ProductsItem.map((cur) => (
            <div
              data-aos="fade-up"
              data-aos-delay={cur.aosDelay}
              className="p-item"
              key={cur.id}
            >
              <img src={cur.img} alt="product" />
              <div>
                <h3 className="p-title">{cur.title}</h3>
                <div className="p-star-container">
                  <FaStar className="p-star" />
                  <span>{cur.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* view all button */}
        <div className="view-all-btn-div">
          <button data-aos="fade-up" className="view-all-btn">
            <NavLink className="t-view-link" to="All">
              View All
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
