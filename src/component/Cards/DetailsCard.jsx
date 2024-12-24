import React, { useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import AllCartsApi from "../AllCarts/AllCartsApi";
import Cards from "./Cards";
import { FaArrowLeft } from "react-icons/fa6";
import { Context } from "../context/Context";
const DetailsCard = () => {
  const { addCartData, setAddCardData } = useContext(Context);
  const Params = useParams();
  const [addedColor, setAddedColor] = useState("rgb(241,148,35)");
  const [btnDisable, setBtnDisable] = useState(false);
  const [added, setAdded] = useState("Add");

  const Result = AllCartsApi.filter((cur) => {
    return cur.id == Params.id;
  });

  const newValue = Result[0].img.trim();
  const mainValue = newValue.replace(" ", "%20");
  // console.log(typeof mainValue);
  // images/AllImages/images (1).jpeg

  // this for adding carts =======
  const sendDataToCarts = (cur) => {
    setAddCardData([...addCartData, cur]);
    setAdded("Added");
    setAddedColor("green");
    setBtnDisable(true);
  };
  return (
    <div className="main-container">
      <NavLink className="back-link" to="/all">
        <div className="back-home">
          <FaArrowLeft /> Back
        </div>
      </NavLink>

      <div className="min-container">
        <img src={mainValue} alt="img" />

        <div className="delails-des">
          <h2 className="details-txt">{Result[0].title}</h2>
          <p className="details-des-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur voluptatum dolor quam temporibus doloremque ut non
            tempore. Fuga numquam ab nesciunt ipsam totam distinctio, in, vel
            nemo itaque, eum voluptate?
          </p>

          <p className="details-off">Off : {Result[0].off}</p>
          <p className="details-p">Price : $ {Result[0].price}</p>
          <p className="details-p">Rating : {Result[0].rate}</p>
          <p className="details-p">
            Total Person Rating : {Result[0].rated_Person}
          </p>
          <p className="details-p">Color : {Result[0].color}</p>
          <p className="details-p">Occucation : {Result[0].occucation}</p>
          <p className="details-p">Size : {Result[0].size}</p>
          <button
            className="addtoc-details"
            onClick={() => sendDataToCarts(Result[0])}
            style={{ backgroundColor: addedColor }}
            disabled={btnDisable}
          >
            {added}
          </button>
        </div>
      </div>

     
    </div>
  );
};

export default DetailsCard;
