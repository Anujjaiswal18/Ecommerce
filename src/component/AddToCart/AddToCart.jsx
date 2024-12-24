import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import IndiAddCarts from "./IndiAddCarts";
import { FaArrowLeft } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const AddToCart = () => {
  const { addCartData, setAddCardData } = useContext(Context);
  // this is for no carts availble=================================
  if (addCartData.length === 0)
    return (
      <center>
        <h1>There Are NO Carts Availble</h1>
      </center>
    );
  // ===================================================================
  return (
    <div className="main-add-cart">
      <NavLink className="back-link" to="/all">
        <div className="back-home">
          <FaArrowLeft /> Back
        </div>
      </NavLink>

      {addCartData.map((cur) => {
        return <IndiAddCarts key={cur.id} cur={cur} />;
      })}
    </div>
  );
};

export default AddToCart;
