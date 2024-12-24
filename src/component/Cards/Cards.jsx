import React, { useContext, useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";

const Cards = ({cur}) => {
  const [titleData, setTitleData] = useState("")
  const [dataTrue,setDataTrue] = useState(false);
  const [addedColor , setAddedColor] = useState("rgb(241,148,35)");
  const [btnDisable , setBtnDisable] = useState(false)
  const [added,setAdded] = useState("Add")
  const {addCartData , setAddCardData} = useContext(Context);
  let Title = cur.title;
  let newTitle = Title.slice(0,23) + "...";
  useEffect(()=>{
    setTitleData(newTitle)
  },[]);

  const handleTitleData = () =>{
      if(!dataTrue){
        setTitleData(cur.title)
        setDataTrue(!dataTrue);
      }else{
        setTitleData(newTitle);
        setDataTrue(!dataTrue)
      }
  }

  const sendDataToCarts = () =>{
    setAddCardData([...addCartData,cur]);
    setAdded("Added");
    setAddedColor("green");
    setBtnDisable(true)
  }
  
  // setTitleData(newTitle)
  return (
    <div className="card ">
      <div className="card-img">
        <NavLink to={`/details/${cur.id}`}>
        <img src={cur.img}/>
        </NavLink>
      </div>
      <span className="off">{cur.off}</span>
      <div className="title-price-box">
        <span className="title">{titleData}
          <span className="more"
          onClick={handleTitleData}
          >{dataTrue ? "Less" : "more"}</span></span>
       <div className="pricing-box">
       <span className="price">{`Price : $ ${cur.price}`}</span><br/>
       <span className="old-price"> Old Price : <span>{cur.oldPrice}</span></span>
       </div>
      </div>
      <button 
      onClick={sendDataToCarts}
      style={{backgroundColor:addedColor}}
      disabled={btnDisable}
      className="add-cart">{added} <FaCartShopping className="cart-icon" /></button>
    </div>
  );
};

export default Cards;
