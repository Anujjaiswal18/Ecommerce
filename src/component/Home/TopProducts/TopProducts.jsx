import React from "react";
import ProductData from "./ProductData";
import { FaStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const TopProducts = () => {
  return (
    <div>
      <div className="top-pro-container">
        {/* Header Section */}
        <div className="products-header extra">
          <p className="p1">Top Rated Products for You</p>
          <h1>Best Products</h1>
          <p className="p2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* body Section */}

        <div className="t-p-card">
          {ProductData.map((cur) => (
            <div key={cur.id} className="p-cards">
                {/* images */}
                <div style={{height:"180px"}}>
                    <img src={cur.img} alt="images" />
                </div>
                {/* body */}
               <span className="rating-star">
               <FaStar className="p-star"/>
               <FaStar className="p-star"/>
               <FaStar className="p-star"/>
               <FaStar className="p-star"/>
               </span>
               <h2 className="top-p-title">{cur.title}</h2>
               <p className="top-p-descr">{cur.description}</p>
                <button className="top-p-view-more">
                  <NavLink className="t-view-link" to="shirts">View More</NavLink></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
